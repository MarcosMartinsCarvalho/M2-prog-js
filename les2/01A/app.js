class App {
    runApplication() {
        let canvas = document.getElementById("canvasId")
        let g = canvas.getContext("2d");
        g.fillRect(0,0,10,10)
    }

}




let app = new App();
app.runApplication();



