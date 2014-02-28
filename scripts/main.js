require.config({
    baseUrl: "scripts",
    paths: {
        jquery: "jquery-2.1.0.min"
    }
});

require(["jquery", "pig", "horse", "text!template.html"], function($, Pig, Horse, html) {
    var node = $("#node").parent();
    window.setTimeout(function() {
        if (node) {
            var newNode = $($.parseHTML(html)[0]);
            newNode.attr("id", "message1");
            newNode.text("The farm is run by the animals!!!");
            node.append(newNode);
            var pig = new Pig("Napoleon");
            var horse = new Horse("Boxer");
            window.setTimeout(function() {
                var newNode = $($.parseHTML(html)[0]);
                newNode.attr("id", "message1");
                newNode.text(pig.says());
                node.append(newNode);
                window.setTimeout(function() {
                    var newNode = $($.parseHTML(html)[0]);
                    newNode.attr("id", "message1");
                    newNode.text(horse.says());
                    node.append(newNode);
                }, 1000);
            }, 1000);
        }
    }, 1000);
});