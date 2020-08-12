const nameInput = document.querySelector('#name-input');

nameInput.addEventListener('input', function(event){
  // console.log(event.target.value)
})

const button = document.querySelector('#send')


function sendButton(){
  console.log('sa da click')
  console.log('nameInput', nameInput.value)

  if(nameInput.value){
    console.log('este valida')
  }
}

button.addEventListener('click', sendButton)