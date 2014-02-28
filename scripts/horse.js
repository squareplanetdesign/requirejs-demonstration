define(["animal"], function(Animal) {
    var Horse = function(name) {
        this.kind = "horse";
        this.sound = "neigh";
        this.name = name || "unamed";
    };

    Horse.prototype = new Animal();

    return Horse;
});