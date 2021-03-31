// Throw - arremesar 

function sayMyName(name = '') {
    if (name === '') {
        throw new Error("Escreva o nome")
    }
    console.log('depois do erro')
}

// sayMyName() // Nunca declarar funçao fora do bloco 

// try - tentar // catch - pegar

try {
    sayMyName('')    
} catch(e){
    console.log(e)
}
console.log('após ao try/catch')