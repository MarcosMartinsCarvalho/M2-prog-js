class App {
    runApplication() {
        let canvas = document.getElementById("canvasId")
        let g = canvas.getContext("2d");
        g.fillStyle = "pink";
        g.fillRect(0,0,canvas.width,canvas.height);
        g.beginPath()
        g.beginPath()
        g.moveTo(20,20);
        g.lineTo(300,300);
        g.close,Path();
        g.stroke();
    
        

    }

}




let app = new App();
app.runApplication();



