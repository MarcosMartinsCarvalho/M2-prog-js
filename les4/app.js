class App {
    runApplication() {
    
        function rekenen(x, y, z) {
            let antwoord = x * y * z;
            return antwoord;
        }
        console.log(rekenen(10, 10, 10));

    }
}


let app = new App();
app.runApplication();