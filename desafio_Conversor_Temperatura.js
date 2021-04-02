/* ### Celsius em fahrenheit

Crie uma função que receba uma string em celsius ou farenheit e faça a transformação de uma unidade para outra

C = * (F - 32) * 5/9

F = C * 9/5 + 32

*/

// 1 - tranformaraGrau('50F')

function transformarGrau(grau) {
    // - extrai apenas o número da variável 'grau' jogando transformando em 'C' ou 'F', jogando para 'celsiusExiste' ou farenheitEx..  :  
    const celsiusExiste = grau.toUpperCase().includes('C')
    const farenheitExiste = grau.toUpperCase().includes('F')

    /* fluxo de Error */
    if (!celsiusExiste && !farenheitExiste) {
        throw new Error('Valor não identificado')
    }

    /*
    /* Opção de fluxo 1: 
    // Fórmula alvo da questão converte farenheit -> celsius
    // let formula = (farenheit) => (farenheit - 32) * 5 / 9 // Arrow function (farenheit) => executa expressão...
    */

    /* Opção de fluxo ideal 2: */
    // F -> C
    let gruaAtualizado = Number(grau.toUpperCase().replace("F", "")) // extrai o número da variável 'grau'
    let formula = (farenheit) => (farenheit - 32) * 5 / 9 // 
    let trocaGrau = 'C'

    /* Fluxo ideal alternativo: */
    // C -> F
    if (celsiusExiste) {
        gruaAtualizado = Number(grau.toUpperCase().replace("C", "")) // extrai o número da variável 'grau'
        formula = celsius => celsius * 9/5 + 32 // 
        trocaGrau = 'F'
    }

    return formula(gruaAtualizado) + trocaGrau

}

try {
    console.log(transformarGrau('10C'))
    console.log(transformarGrau('50f'))
    transformarGrau('50Z')
} catch (error) {
    console.log(error.message)
}
