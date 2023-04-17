// @ts-nocheck
const input = document.getElementById('input')

document.getElementById('value').addEventListener('click', function(){
 console.log(input.getAttribute('value'))
})
document.getElementById('type').addEventListener('click', function (){
  input.type = input.type !== 'radio' ? 'radio' : Text
})

document.getElementById('placeholder').addEventListener('click', function (){
  input.placeholder = 'Digite Algo'
})
document.getElementById('disable').addEventListener('click', function(){
  input.setAttribute('disabled', !input.disabled)
} )
document.getElementById( 'data').addEventListener('click', function (){
  const data = input.dataset.something
  console.log('O valor do atributo datasomething é : ' + data)
  input.dataset.something ='algum outro valor'
})