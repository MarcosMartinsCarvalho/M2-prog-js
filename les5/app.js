class App
{
    runApplication()
    {
        console.clear();
        let headers = document.getElementsByTagName("h1")
        this.LogArray(headers)

        let headersByCssClass = document.getElementsByClassName("bandName")
        this.LogArray(headersByCssClass)
        for (let i = 0; i < headersByCssClass.length; i++) {
            console.log(headersByCssClass[i].innerHTML)
            headersByCssClass[i].innerHTML = "bam"
        }

        headersByCssClass[0].innerHTML = "Nieuws"
        headersByCssClass[1].innerHTML = "Reviews"
        headersByCssClass[2].innerHTML = "Commentaar"
        headersByCssClass[3].innerHTML = "Beste forum posts"
        headersByCssClass[4].innerHTML = "Pricewatch"

        let data = [headersByCssClass[0].innerHTML, headersByCssClass[1].innerHTML, headersByCssClass[2].innerHTML, headersByCssClass[3].innerHTML, headersByCssClass[4].innerHTML]
        for (let i = 0; i < data.length; i++) {
            headersByCssClass[i].innerHTML = `${i}: ${data[i]}`
        }

        console.log("biem");
        let band = ["Sycamour", "Deviloof", "Jiluka", "pierce the veil"]
        console.log(band)
        this.logMetNummer(band)

        band.push("Nik Nocturnal")
        band.push("Ice Nine Kills")
        this.logMetNummer(band)
        let indexToRemove = band.indexOf("bob dylan")
        band.splice(indexToRemove, 1)


        indexToRemove = band.indexOf("prince")
        band.splice(indexToRemove, 1)

        band.push("bob dylan")
        band.push("prince")

        
        this.logMetNummer(band)

        let nummers = [1, 2, 3]
        this.logMetNummer(nummers)
    }

    LogArray(array){
        for (let i = 0; i < array.length; i++) {
            console.log(array[i])
        }
    }

    logMetNummer(arraytje){
        for (let i = 0; i < arraytje.length; i++) {
            console.log(`${i + 1}: ${arraytje[i]}`)            
        }
    }
}

let app = new App();
app.runApplication();