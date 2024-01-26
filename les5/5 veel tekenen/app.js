class App {
    runApplication() {
        console.clear();
        let canvas = document.getElementById("canvasId");
        let c = canvas.getContext("2d");
        let i = 0;
        let interval = setInterval(() => {
            if (i >= 10000) {
                clearInterval(interval);
                return;
            }
            let x = Math.floor(Math.random() * 1000);
            let y = Math.floor(Math.random() * 1000);
            this.tekenCirkel(c, x, y);
            i++;
        }, 1);
    }

    tekenCirkel(c, x, y) {
        c.beginPath();
        c.arc(x, y, 10, 0, Math.PI * 2);
        c.stroke();
        c.fill();
        c.closePath();
    }
}

let app = new App();
app.runApplication();