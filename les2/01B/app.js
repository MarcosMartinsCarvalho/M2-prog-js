class App {
    runApplication() {
        let canvas = document.getElementById("canvasId")
        let g = canvas.getContext("2d");
        g.fillStyle = "pink";
        g.fillRect(0,0,canvas.width,canvas.height);
        g.beginPath()
        g.beginPath()
        g.fillStyle = "yellow";
        g.moveTo(20,20);
        g.lineTo(300,300);
        g.lineTo(580,20);
        g.closePath();
        g.stroke();
        g.fill();
        

    }

}




let app = new App();
app.runApplication();



