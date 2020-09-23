class Hangman {
    constructor() {
        this.cuvinte = ["masina", "telecomanda", "telefon", "teleenciclopedie"];

        // alegem cuvantul random
        const randomIndex = Math.floor(Math.random() * this.cuvinte.length);
        this.cuvantAles = this.cuvinte[randomIndex];
        console.log('cuvantAles = ', this.cuvantAles);
        this.underLines = {};
        this.vieti = 3;
        this.divVieti = document.createElement("div");
        document.body.appendChild(this.divVieti);
    }

    showVieti(vieti) {
            this.divVieti.innerText = "Numarul tau de vieti este " + vieti;
        }
        /*
        Sa afisam cate o liniuta pentru fiecare litera din cuvantul ales
        1. Parcurgem  fiecare literea din cuvantul ales
        2. Sa facem un div, care este defapt liniuta
        */
    renderUnderlines() {
            const underLinesContainer = document.querySelector('#underLines');

            underLinesContainer.style.display = 'flex'
            underLinesContainer.style.flexDirection = 'row'
            for (let index = 0; index < this.cuvantAles.length; index++) {
                const underLineDiv = document.createElement('div');
                underLineDiv.style.margin = '5px'
                    // innerText/innerHtml putem seta in string 
                underLineDiv.innerText = '_';
                // adaugam liniuta in container
                underLinesContainer.appendChild(underLineDiv);

                // salvam underLine
                // char este pe rand fiecare literea din cuvantul ales
                const char = this.cuvantAles[index];

                // initialiam valoare
                if (!this.underLines[char]) {
                    this.underLines[char] = [];
                }
                this.underLines[char].push(underLineDiv);
            }
            console.log(this.underLines)
        }
        /*
        Sa obtina inputul de la user
        1. Avem nevoie de un tag <input> 
        2. Referinta de la <input> 
        3. Un event de keydown, sa ascultam la acest event
        4. Afisam valoarea doar daca sa apasat enter
        */
    getInput() {
        // this - este cel corect , adica obiectul HangMan
        const userInput = document.querySelector('#userInput');

        userInput.addEventListener("keydown", event => {
            // this de interior va fi cel de mai sus
            if (event.key == "Enter") {
                const letter = event.target.value;
                console.log('letter =', letter)
                this.playGame(letter)
            }
        })
    }

    /*
    Returneaza true daca litera apare in cuvantul ales, iar daca nu false
    Facem verificare in momentul in care utilizatorul apasa enter
    */
    checkLetter(letter) {
        for (let index = 0; index < this.cuvantAles.length; index++) {
            const char = this.cuvantAles[index];
            if (letter === char) {
                return true
            }
        }
        return false
    }

    playGame(letter) {
        if (this.checkLetter(letter)) {
            // se face replace la _ cu litera
            // vrem sa obtinem underLine din DOM fara sa facem for
            this.underLines[letter].forEach(div => {
                div.innerText = letter;
            })
        } else {
            this.vieti = this.vieti - 1
            console.log(this.vieti);
            this.showVieti(this.vieti);
            // update in dom la nr vieti
        }

    }

}
const hangman = new Hangman()
hangman.showVieti(hangman.vieti);
hangman.getInput();
hangman.renderUnderlines();