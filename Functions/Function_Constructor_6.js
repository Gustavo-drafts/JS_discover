/*
Function() constructor

* expressão new
* criar um novo objeto
* this keyword - sempre vai referenciar ao objeto de fora <const gustavo> do escopo
 */

function Person(name) {
    this.name = name
}


const gustavo = new Person('Gustavo') // objeto
const suzy = new Person('Suzy')       // modelo para criar objetos
console.log(gustavo)
console.log(suzy)