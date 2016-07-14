class Grid {
    canvasElement:any = document.getElementById("grid")
    canvasCtx:any = this.canvasElement.getContext("2d")
    createPoint( x:number, y:number, color:string, debug?:boolean)
    {
        var textForDebug: string;
        if(debug){
            textForDebug = ["\nx:", x, "\n y:", y].join("");
        }
    }
}
