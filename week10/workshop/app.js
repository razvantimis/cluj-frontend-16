function HangMan (){
  this.cuvinte = ["masina", "telecomanda", "telefon", "teleenciclopedie"];
  var randomIndex = Math.floor(Math.random()*this.cuvinte.length);
  this.cuvantAles = this.cuvinte[randomIndex];
  console.log(this.cuvantAles);
}

/*
Sa obtina inputul de la user
1. Avem nevoie de un tag <input> 
2. Referinta de la <input> 
3. Un event de keydown, sa ascultam la acest event
4. Afisam valoarea doar daca sa apasat enter
*/
HangMan.prototype.getInput = function () {
  const userInput = document.querySelector('#userInput');
  
  userInput.addEventListener("keydown", function(event){
    if(event.key == "Enter"){
      const letter = event.target.value;
      console.log(letter)
    }
  })
}

const hangMan = new HangMan();
hangMan.getInput();

