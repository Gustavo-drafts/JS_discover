/* ### Sistema de gastos familiar

Crie um objeto que possuirá 2 propriedades, ambas do tipo array:

    * receitas [] - incomes(tradução)
    * despesas [] - expenses(tradução)

Agora, crie uma function que irá calcular o total de receitas e despesas e irá mostrar uma mensagem se a família está com saldo positivo ou negativo, sguido do valor do saldo
*/


// 1- Criando os Arrays com valores:
let familia = {
    incomes: [500, 155.50, 280.90, 320, 70],
    expenses: [132, 155, 48, 479, 89, 219, 80]
}

// 3- função de soma dos valores do array:
function soma(array) {
    let total = 0;

    for (let value of array) {
        total += value
    }

    return total
}

/* 2- Função que: 

* Pega os 'valores dentro do array', 
* Joga pra variável 'calculateIncomes / calculateExpenses' 
* Joga pra 'total' a subtração os valores das variáveis
* Joga pra variável 'itsOk' o valor de 'total'
* A variável 'balanceText' é criada e passa pelo desvio 'condicional'
* Condicional define o que 'balanceText' vai exibir
*/

function calculateBalance() {
    const calculateIncomes = soma(familia.incomes)
    const calculateExpenses = soma(familia.expenses)

    const total = calculateIncomes - calculateExpenses
    
    const itsOk = total >= 0
    
    let balanceText = "negativo"
    if (itsOk) {
        balanceText = "positivo"
    }

    console.log(`Seu saldo é: ${balanceText} : ${total.toFixed(2)} R$`)
}

// 4 - Chamando a função
calculateBalance()