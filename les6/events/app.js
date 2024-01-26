class App {
    runApplication() {
        console.clear();
        let uiButton = document.getElementById("myButton");
        uiButton.addEventListener("click", function (e) {
            console.log("click");
        });
    }
}

let app = new App();
app.runApplication();