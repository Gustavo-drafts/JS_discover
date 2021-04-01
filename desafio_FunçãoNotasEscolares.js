/* Transformar notas escolares

Crie um algoritmo que transforme as notas do sistema numérico para sistema de notas em caracteres tipo A B C D F

* acima de 90 -   A
* entre 80 e 89 - B
* entre 70 e 79 - C
* entre 60 e 69 - D
* menor que 60  - F
*/


// 4 - Criou-se uma função com o Sistema de notas
function getNota(nota) {

    let notaA = nota >= 90 && nota <= 99 // 1- atribui-se a condição dentro da variável
    let notaB = nota >= 80 && nota <= 89
    let notaC = nota >= 70 && nota <= 79
    let notaD = nota >= 60 && nota <= 69
    let notaF = nota < 60 && nota >= 0

    let notaFinal // 2 - Cria-se uma variável resultado


    if (notaA) { // 3 - Utiliza a variável pronta dentro do bloco condicional
        notaFinal = 'A'
    } else if (notaB) {
        notaFinal = 'B'
    } else if (notaC) {
        notaFinal = 'C'
    } else if (notaD) {
        notaFinal = 'D'
    } else if (notaF) {
        notaFinal = 'F'
    } else {
        notaFinal = "Nota inválida"
    }
    
    return notaFinal
}


// 5 - Invocando a função várias vezes pra testar:

console.log(getNota(101))
console.log(getNota(-1))
console.log(getNota(0))
console.log(getNota(1))
console.log(getNota(45))
console.log(getNota(60))
console.log(getNota(61))
console.log(getNota(75))
console.log(getNota(85))
console.log(getNota(95))









