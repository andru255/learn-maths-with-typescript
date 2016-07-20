var Grid = (function () {
    function Grid() {
        this.canvasElement = document.getElementById("grid");
        this.canvasCtx = this.canvasElement.getContext("2d");
    }
    Grid.prototype.createPoint = function (x, y, color, debug) {
        var textForDebug;
        if (debug) {
            textForDebug = ["\nx:", x, "\n y:", y].join("");
        }
    };
    return Grid;
}());
