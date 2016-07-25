window.onload = () => {

    let txtAreaTextElement:HTMLInputElement = <HTMLInputElement>document.getElementById("txtAreaText");
    let btnSubmitElement:HTMLInputElement = <HTMLInputElement>document.getElementById("btnSubmit");
    let canvas:HTMLCanvasElement = <HTMLCanvasElement>document.getElementById("canvas");
    let ctx:CanvasRenderingContext2D = canvas.getContext("2d");

    btnSubmitElement.addEventListener("click", (evt) => {
        let textAreaValue:string = txtAreaTextElement.value;
        let totalCharacters:number = textAreaValue.length;

        ctx.clearRect(0, 0, canvas.width, canvas.height);
        ctx.font = "12px serif";

        if(totalCharacters > 50){
            ctx.fillStyle = "red"; 
        } else {
            ctx.fillStyle = "blue"; 
        }

        ctx.fillText(`It has a length of ${totalCharacters}`, 0, 20);
        evt.preventDefault();
    });
}
