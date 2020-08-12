const nameInput = document.querySelector('#name-input');

nameInput.addEventListener('input', function(event){
  // console.log(event.target.value) 
  // nameInput.value , event.target === nameInput
})

const button = document.querySelector('#send')


function sendButton(){
  console.log('sa da click')
  console.log('nameInput', nameInput.value)

  // validare
  if(nameInput.value){
    console.log('este valida')
  } else {
    nameInput.classList.add('invalid')
  }
}

button.addEventListener('click', sendButton)