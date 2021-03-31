// function hoisting

sayMyName()


function sayMyName() // Sofre elevação (hoisting) 
{
    console.log('Gustavo')
}


const function sayMyName() // Não sofre elevação (hoisting)  
{
    console.log('Gustavo')
}