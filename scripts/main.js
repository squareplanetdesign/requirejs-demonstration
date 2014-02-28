require(["pig", "horse"], function(Pig, Horse) {
    var node = document.getElementById("node");
    window.setTimeout(function() {
        if (node) {
            node.innerHTML = "The farm is run by the animals!!!";
            var pig = new Pig("Napoleon");
            var horse = new Horse("Boxer");
            window.setTimeout(function() {
                node.innerHTML = pig.says();
                window.setTimeout(function() {
                    node.innerHTML = horse.says();
                }, 1000);
            }, 1000);
        }
    }, 1000);
});