//Array

const animals = [
    'Lion',  // posição 0
    'Monkey', // posição 1
    {                       // 
        name: 'Cat',        // posição 2
        age: 3              //
    }                       //
]

// acessar valores dentro de array

// Tamanho do Array:
// console.log(animals.length) 

// acessando o objeto direto:
console.log(animals[2])

// acessando uma propriedade do obj:
console.log(animals[2].name)



const animal3 = {
    name: "Cavalo",
    age: 25
}

// inserindo Objeto na '3' posição do Array:
animals[3] = animal3