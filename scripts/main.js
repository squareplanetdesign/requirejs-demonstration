require.config({
    baseUrl: "scripts",
    paths: {
        jquery: "jquery-2.1.0.min"
    }
});

require(["jquery", "pig", "horse", "text!template.html"], function($, Pig, Horse, html) {
    var node = $("#node").parent();
    var id = 0;

    /**
     * Add a node to the dom
     */
    var addNode = function(node, text) {
        var newNode = $($.parseHTML(html)[0]);
        newNode.attr("id", "message" + id++);
        newNode.text(text);
        node.append(newNode);
    };

    window.setTimeout(function() {
        if (node) {
            addNode(node, "The farm is run by the animals!!!");
            var pig = new Pig("Napoleon");
            var horse = new Horse("Boxer");
            window.setTimeout(function() {
                addNode(node, pig.says());
                window.setTimeout(function() {
                    addNode(node, horse.says());
                }, 1000);
            }, 1000);
        }
    }, 1000);
});