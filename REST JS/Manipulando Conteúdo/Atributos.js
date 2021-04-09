/* Manipulando elementos */ 
// Atributos

const element = document.querySelector('header')
header.setAttribute('id', 'header') // adicionando atributo 'id', 'header'

const headerID = document.querySelector('#header') // pesquisa no documento pelo id 'header'

console.log(headerID.getAttribute('id')) // pegar o atributo 

header.removeAttribute('id') // remover o atributo no id

header.setAttribute('class', 'bg header') // adicionar classes 

 