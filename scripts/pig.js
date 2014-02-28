define(["animal"], function(Animal) {
    var Pig = function(name) {
        this.kind = "pig";
        this.sound = "oink";
        this.name = name || "unamed";
    };

    Pig.prototype = new Animal();

    return Pig;
});