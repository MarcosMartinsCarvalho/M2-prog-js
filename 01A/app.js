class App {
    runApplication() {
    
        let appnaam = ("nerve gear");
        let versienummer = ("1");
        let versiedatum = ("mei 2022");
        let autheur = ("Kayaba Akihiko");
        let copyright = ("NerveGear");
        let distributeur = ("Kayaba Akihiko");
        let darkmode = ("false ");
        
        console.log("appnaam: " + appnaam);
        console.log("versienummer: " + versienummer);
        console.log("versiedatum: " + versiedatum);
        console.log("copyright: " + copyright);
        console.log("autheur: " + autheur);
        console.log("distributeur: " + distributeur);
        console.log("darkmode: " + darkmode);

    }
}


let app = new App();
app.runApplication();