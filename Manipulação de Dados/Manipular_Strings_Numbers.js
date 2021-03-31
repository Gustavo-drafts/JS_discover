// Manipulando Strings e Números

/* Trasformar String em Número e Número em String

let string = "123"
console.log(Number(string)) // utilizando a função faço a troca do tipo de dado 'string'

let number = 321
console.log(String(number)) // utilizando a função faço a troca do tipo de dado 'number'

*/

// OBS: console.log() é utilizado apenas para fins de exemplo 

// Sintaxe pura:
// let dado = valor  
// (Tipo_de_conversão(valor))

/*
Contar quantos caracteres tem uma palavra e quantos dígitos tem um número
*/

/*
let word = "Paralelepipedo"
(word.length)
let number = 1234
(String(number).length)
*/

/*
// Transformar um número quebrado com 2 casas decimais e trocar '.'(ponto) por ','(vírgula):

let number = 1321298.732165
(number.toFixed(2).replace(".", ","))

/*
Funções atreladas ao objeto também são chamadas de "Método":

toFixed é um método
*/

/*
Método Transformar minúsculas em Maiúsculas:

let word = 'Programar é muito bacana'

(word.toUpperCase()) // minúsculas em maiúsculas

(word.toLowerCase()) // maiúsculas em minúsculas
*/

/*
Verificar se o texto contém a palavra específica:

(Amor)

let phrase = "Eu quero viver!"

(phrase.includes('Amor')) // passa a palavra desejada como argumento para o método realizar a busca.

a função retorna valor booleano
*/

