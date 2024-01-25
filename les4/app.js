class App {
    runApplication() {
    console.clear();
        console.log("hello world")

    }

    myClassFunction(biem){
        console.log("dit is een argument");
        console.log("hier:");
        console.log(biem);

    }
    
}


let app = new App();
app.myClassFunction("argument");