class App {
    runApplication() {



        let randomgetal = Math.random();
        let randomgetal2 = Math.random();
        let randomgetal3 = Math.random();


        const title = document.getElementById("newtitle");
        const title2 = document.getElementById("gamenews headline");
        const title3 = document.getElementById("gamenews");

        let canvas = document.getElementById("canvasId");
        let g = canvas.getContext("2d");
        g.fillStyle = "white";
        g.fillRect(0, 0, canvas.width, canvas.height);
        g.fillStyle = "red";
        g.beginPath();
        g.moveTo(100, 33.33);
        g.lineTo(233.33, 66.67);
        g.lineTo(200, 133.33);
        g.lineTo(66.67, 100);
        g.closePath();
        g.stroke();
        g.fill();
        g.beginPath();
        g.lineTo(233.33, 66.67);
        g.lineTo(266.67, 100);
        g.moveTo(266.67, 100);
        g.lineTo(266.67, 166.67);
        g.moveTo(266.67, 166.67);
        g.lineTo(200, 200);
        g.moveTo(200, 200);
        g.lineTo(200, 133.33);
        g.moveTo(200, 200);
        g.lineTo(66.67, 166.67);
        g.moveTo(66.67, 166.67);
        g.lineTo(66.67, 100);
        g.fillStyle = "blue";
        g.moveTo(133.33, 133.33);
        g.lineTo(133.33, 150);
        g.moveTo(133.33, 133.33);
        g.lineTo(150, 137.67);
        g.moveTo(150, 137.67);
        g.lineTo(150, 153.33);
        g.moveTo(150, 153.33);
        g.lineTo(133.33, 150);
        g.stroke();
        
        g.closePath();
        g.fill();


        if (randomgetal < 0.2) {
            title.style.backgroundColor = `#FF0000`;
        } else if (randomgetal > 0.2) {
            title.style.backgroundColor = "#00FF00";
        }

        if (randomgetal2 < 0.2) {
            title2.style.backgroundColor = `#FF0000`;
        } else if (randomgetal2 > 0.2) {
            title2.style.backgroundColor = "#00FF00";
        }
        if (randomgetal3 < 0.2) {
            title3.style.backgroundColor = `#FF0000`
        }
        else if (randomgetal2 > 0.2) {
            title3.style.backgroundColor = "#00FF00"
        }


    }
}



let app = new App();
app.runApplication();



