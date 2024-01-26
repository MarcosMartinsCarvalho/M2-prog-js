class App {
    runApplication() {
        let button = document.getElementById('mijnKnop');
        let content = document.getElementById('alles');
        let biemdiv = document.getElementById('biemdiv');
        let biemdiv1 = document.getElementById('biemdiv1');

        button.addEventListener('click', () => { 
            content.hidden = false;
            
        });

        biemdiv.addEventListener('click', () => {
            biemdiv.style.backgroundColor = 'purple';
            biemdiv1.style.display = 'block';
            biemdiv2.style.display = "block";

            console.alert
        });
        
    }
}

let app = new App();
app.runApplication();