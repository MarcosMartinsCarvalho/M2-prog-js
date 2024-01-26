class App {
    runApplication() {
        console.clear();
        let nummers = [1,2,3]
        let myarr = ["boem", "biem", "bam"]
        for(let i = 0; i < myarr.length; i++) {
            const woordenprint = i + ": " + myarr[i];
            const nummerprint = nummers[i];
            console.log(woordenprint);
            console.log(nummerprint);
        }

    }
}


let app = new App();
app.runApplication();