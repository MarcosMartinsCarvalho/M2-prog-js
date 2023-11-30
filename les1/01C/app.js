class App {
    runApplication() {
        this.greeting = "starting up";
        let hp = 30000;
        let name = "Kirito";
        let party = "Solo";
        console.log("health = "+ hp)
        console.log("name = " + name)
        console.log("party = " + party)
        

this.appnaam = "copyright: nerve gear";
this.versienummer = "copyright: 1";
this.versiedatum = "copyright: mei 2022";
this.autheur = "copyright: Kayaba Akihiko";
this.copyright = "copyright: NerveGear";
this.distributeur = "distributeur: Kayaba Akihiko";
this.darkmode = "darkmode : " + false ;

    }

}




let app = new App();
app.runApplication();


console.log(app.greeting)
console.log(app.appnaam);
console.log(app.versienummer);
console.log(app.versiedatum);
console.log(app.copyright);
console.log(app.autheur);
console.log(app.distributeur);
console.log(app.darkmode);

