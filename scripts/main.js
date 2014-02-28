require(["animal"], function(Animal) {
    var node = document.getElementById("node");
    window.setTimeout(function() {
        if (node) {
            node.innerHTML = "The farm is run by the animals!!!";
            var pig = new Animal("pig", "Napoleon", "oink");
            window.setTimeout(function() {
                node.innerHTML = pig.says();
            }, 1000);
        }
    }, 1000);
});