class App {
    runApplication() {
        console.clear();
        this.mario();
        bwahaha();
        optellen(5,6);
        extra();

    }

    mario()
    {
        console.log("MARIOOOOOO");
    }

    bwahaha()
    {
        console.log("bwahahaha");
    }

    optellen(x,y)
    {
        console.log(x + y);

    }

    extra()
    {
        console.log("hallo ik ben een extra functie");

    }
}


let app = new App();
app.runApplication();