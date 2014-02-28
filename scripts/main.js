require([], function() {
    window.setTimeout(function() {
        var node = document.getElementById("node");
        if (node) {
            node.innerHTML = "The farm is run by the animals!!!";
        }
    }, 1000);
});