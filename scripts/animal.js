define(function() {
    var Animal = function(kind, name, sound) {
        this.kind = kind || "unknown";
        this.name = name || "unamed";
        this.sound = sound || "weah";
    };

    Animal.prototype = {
        says: function() {
            return "The " + this.kind + " " + this.name + " goes " + this.goes();
        },
        goes: function() {
            return this.sound;
        }
    };

    return Animal;
});