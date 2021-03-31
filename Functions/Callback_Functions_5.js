// callback function
// chame de volta - callback 
function sayMyName(nome) {
    console.log('antes de executar a funcao callback')

    nome()
    console.log('depois de executar a callback')
}
sayMyName(
    () => {
        console.log('estou em uma callback')
    }
)