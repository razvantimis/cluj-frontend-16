// inaite de template literals
const nota = 10;
function getNota() {
  return 10;
}
const mesaj = "Nota ta este" + nota + ". Felicitari" +
  "Alex: " + nota + "Razvan: " + note;

// template
const mesaj2 = `Nota ta este ${nota}`
const mesaj2 = `Nota ta este ${nota + 3 / 3 + 45 + 3}`
const mesaj2 = `Nota ta este ${getNota()} . Felicitari! 
Alex: ${note}, Razvan: ${note}`

// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Template_literals