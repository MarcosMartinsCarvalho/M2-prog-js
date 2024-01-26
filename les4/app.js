class App {
    runApp() {
      const canvas = document.getElementById("canvasId");
      const g = canvas.getContext("2d");
      this.drawHouse(g, 10, 10);
      this.drawHouse(g, 75, 50);
      this.drawHouse(g, 120, 120);
      this.drawChristmasTree(g, 300, 300);
    }
  
    drawHouse(g, x, y) {
      g.beginPath();
      g.moveTo(30 + x, 10 + y);
  
      
      this.setColor(g, "red");
      g.lineTo(70 + x, 20 + y);
      g.lineTo(60 + x, 40 + y);
      g.lineTo(20 + x, 30 + y);
      g.closePath();
      g.fill();
      g.stroke();
  
      
      this.setColor(g, "lightGray");
      g.fill();
      g.stroke();
  
      this.setColor(g, "gray");
      g.beginPath();
      g.moveTo(60 + x, 40 + y);
      g.lineTo(70 + x, 20 + y);
      g.lineTo(80 + x, 30 + y);
      g.closePath();
      g.fill();
      g.stroke();
  
      this.setColor(g, "darkGray");
      g.beginPath();
      g.moveTo(60 + x, 40 + y);
      g.lineTo(60 + x, 60 + y);
      g.lineTo(80 + x, 50 + y);
      g.lineTo(80 + x, 30 + y);
      g.fill();
  
      g.stroke();
  
      this.setColor(g, "cyan", 0.5);
      g.fillRect(30 + x, 40 + y, 20, 10);
    }
  
    drawChristmasTree(g, x, y) {
      
      this.setColor(g, "saddleBrown");
      g.beginPath();
      g.moveTo(x, y);
      g.lineTo(x + 50, y);
      g.lineTo(x + 50, y + 50);
      g.lineTo(x, y + 50);
      g.closePath();
      g.fill();
      g.stroke();
  
      
      this.setColor(g, "forestGreen");
      g.beginPath();
      g.moveTo(x - 50, y);
      g.lineTo(x + 100, y);
      g.lineTo(x + 25, y - 150);
      g.closePath();
      g.fill();
      g.stroke();
  
      let ballX = x;
      let ballY = y;
      for (let i = 0; i < 8; i++) {
        this.drawBall(g, ballX, ballY);
        ballX += 10;
        ballY += 20;
        if (ballX >= x + 20) {
          ballX = x;
        }
      }
    }
  
    drawBall(g, x, y) {
      this.setColor(g, "plum", 0.5);
      g.beginPath();
      g.arc(x + 20, y - 150, 10, 0, Math.PI * 2);
      g.closePath();
      g.fill();
      g.stroke();
    }
  
    setColor(g, color, alpha = 1) {
      g.fillStyle = color;
      g.strokeStyle = color;
      g.globalAlpha = alpha;
    }
  }
  
  const app = new App();
  app.runApp();