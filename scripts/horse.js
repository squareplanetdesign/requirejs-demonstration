define(["animal"], function(Animal) {
    var Horse = function(name) {
        this.kind = "horse";
        this.sound = "neigh";
        this.name = name || "unamed";
    };

    Horse.prototype = new Animal();
    Horse.prototype.says = function() {
        return "The " + this.kind + " " + this.name + " says I can't tell the difference between the humans and the pigs!!!";
    };

    return Horse;
});