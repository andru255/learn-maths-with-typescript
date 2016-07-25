window.onload = function () {
    var txtAreaTextElement = document.getElementById("txtAreaText");
    var btnSubmitElement = document.getElementById("btnSubmit");
    var canvas = document.getElementById("canvas");
    var ctx = canvas.getContext("2d");
    btnSubmitElement.addEventListener("click", function (evt) {
        var textAreaValue = txtAreaTextElement.value;
        var totalCharacters = textAreaValue.length;
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        ctx.font = "12px serif";
        if (totalCharacters > 50) {
            ctx.fillStyle = "red";
        }
        else {
            ctx.fillStyle = "blue";
        }
        ctx.fillText("It has a length of " + totalCharacters, 0, 20);
        evt.preventDefault();
    });
};
