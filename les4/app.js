class App {
    runApplication() {
        console.clear();

        function argumentsAreHandy(shoutout,shoutout2,shoutout3){
            console.log("could you give me a shoutout?");
            console.log(shoutout);
            console.log(shoutout2);
            console.log(shoutout3);
        }
        argumentsAreHandy("mega super shoutout","biembiembambam", "super mega turbo giga astro shoutout");
    }
}

let app = new App();

app.runApplication();
