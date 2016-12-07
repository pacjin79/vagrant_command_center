
window.require = function (requirePath) {
    var fsFake = {
        readFileSync: function(){ }
    };
    var pathFake = {
        join: function() {
            return {
                remote: {
                    require: function() { }
                }
            }
        }
    };
    switch (requirePath) {
        case "fs":
            return fsFake;
        case "path":
            return pathFake;
        default:
            break;
    }
}

window.__dirname = "";