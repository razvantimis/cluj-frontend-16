function HangMan() {
    this.cuvinte = ["masina", "telecomanda", "telefon", "teleenciclopedie"];
    var randomIndex = Math.floor(Math.random() * this.cuvinte.length);
    this.cuvantAles = this.cuvinte[randomIndex];
    console.log('cuvantAles = ', this.cuvantAles);
    this.underLines = {};
    /*
    {
      'a': [ underLine1, underLine2],
      'b': [ underLine1 ]
    }
    */
}
/*
Sa afisam cate o liniuta pentru fiecare litera din cuvantul ales
1. Parcurgem  fiecare literea din cuvantul ales
2. Sa facem un div, care este defapt liniuta
*/
HangMan.prototype.renderUnderLines = function() {
        const underLinesContainer = document.querySelector('#underLines');

        underLinesContainer.style.display = 'flex'
        underLinesContainer.style.flexDirection = 'row'
        for (let index = 0; index < this.cuvantAles.length; index++) {
            let underLineDiv = document.createElement('div');
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
HangMan.prototype.getInput = function() {
    const userInput = document.querySelector('#userInput');

    const self = this;
    userInput.addEventListener("keydown", function(event) {
        if (event.key == "Enter") {
            const letter = event.target.value;
            console.log('letter =', letter)
            self.replaceUnderLine(letter)
        }
    })
}

/*
Returneaza true daca litera apare in cuvantul ales, iar daca nu false
Facem verificare in momentul in care utilizatorul apasa enter
*/
HangMan.prototype.checkLetter = function(letter) {
    for (let index = 0; index < this.cuvantAles.length; index++) {
        const char = this.cuvantAles[index];
        if (letter === char) {
            return true
        }
    }
    return false
}

/*
Daca checkLetter este true, sa inlocuim underLine cu litera
Input:
- letter
- cuvantulAlex

*/
// HangMan.prototype.replaceUnderLine = function(letter) {
//     // const underLinesContainer = document.querySelector('#underLines');
//     if (this.checkLetter(letter)) {
//         // trebe sa inlocuim _ cu letter
//         for (let index = 0; index < this.cuvantAles.length; index++) {
//             const char = this.cuvantAles[index];
//             if (letter === char) {
//                 console.log('index =', index);
//                 // cautam div dupa index
//                 const underLine = underLinesContainer.querySelector('div:nth-child(' + (index + 1) + ')');
//                 console.log('underLine', underLine)
//                 underLine.innerText = letter;
//             }
//         }
//     }

// }

HangMan.prototype.replaceUnderLine = function(letter) {
    if (this.checkLetter(letter)) {
        // vrem sa obtinem underLine din DOM fara sa facem for
        const underLines = this.underLines[letter];
        underLines.forEach(function(underLineDiv) {
            console.log(underLineDiv)
            underLineDiv.innerText = letter;
        })
    }

}

const hangMan = new HangMan();
hangMan.getInput();
hangMan.renderUnderLines();