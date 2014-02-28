require.config({
    baseUrl: "scripts",
    paths: {
        jquery: "jquery-2.1.0.min"
    }
});

require(["jquery", "pig", "horse"], function($, Pig, Horse) {
    var node = $("#node");
    window.setTimeout(function() {
        if (node) {
            node.text("The farm is run by the animals!!!");
            var pig = new Pig("Napoleon");
            var horse = new Horse("Boxer");
            window.setTimeout(function() {
                node.text(pig.says());
                window.setTimeout(function() {
                    node.text(horse.says());
                }, 1000);
            }, 1000);
        }
    }, 1000);
});