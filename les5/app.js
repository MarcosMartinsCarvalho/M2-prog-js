class App {
    runApplication() {
        console.clear();
        let nummers = [1,2,3]
        let myarr = ["boem", "biem", "bam"]
        
        let indexToRemove = myarr.indexOf("biem");
        myarr.splice(indexToRemove, 1);
        
        indexToRemove = myarr.indexOf("bam");
        myarr.splice(indexToRemove, 1);
        
        myarr.push("panic at the disco", "sycamour");
        
        for(let i = 0; i < myarr.length; i++) {
            const woordenprint = i + ": " + myarr[i];
            
            console.log(woordenprint);
            
        }
    }
}

let app = new App();
app.runApplication();