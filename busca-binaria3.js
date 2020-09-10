// Pré-requisiro para a busca biária: o conjunto de dados
// PRECISA estar ordenado pelo critério de busca
// Método Raul Seixas: Início, fim e o meio
let comp = 0

// Implementação recursiva
// Uma função chama a si mesma com pelo menos um de seus parâmetros com valor alterado
// Função recursiva precisa ter, pelo menos, uma condição de saída. Isto é, uma possibilidade
// de término que não envolve uma chamada a ela mesma.

// Parâmetro opcional, faz-se desnecessário informar posteriormente.
// Caso a função seja chamada sem especificá-los, eles assumirão os valores indicados.   
function buscaBinaria(lista, valorBusca, fnComp, inicio = 0 , fim = lista.length - 1) {
    // let inicio = 0
    // let fim = lista.length -1
    
    if(fim >= inicio) {
        // Math.floor(): retira as casas decimais de um número arredondando para baixo
        // Math.ceil(): arredonda para baixo
        // Math.round(): arredonda conforme regra matemática se for até .4 arredonda para baixo, .5 acima arredonda para cima
        let meio = Math.floor((fim + inicio) / 2)
        
        let res = fnComp(lista[meio], valorBusca)

        // Verifica se o valor na posição média é o valor de busca
        if(res == 0) {
            comp++ // Uma comparação foi realizada
            return meio     // Condição de saída
        }
        else if(res < 0) {
            comp += 2 // Duas comparação foi realizada
            // Condição recursiva (volta ao início da função com dados motificados)
            return buscaBinaria(lista, valorBusca, fnComp, inicio, meio - 1)
        }
        else { //valorBusca > lista[meio]
            comp += 2 // Duas comparação foi realizada
            // Condição recursiva (volta ao início da função com dados motificados)
            return buscaBinaria(lista, valorBusca, fnComp, meio + 1, fim)
        }
    }
    return -1 // Valor não encontrado (Condição de saída)
}

function comparaNome(obj, valorBusca) {
    // Os dois valores são iguais
    if(valorBusca === obj.first_name) return 0 // Igualdade
    // Um número negativo para indicar que o primeiro < segundo
    else if(valorBusca < obj.first_name) return -1
    // Um número positivo para indicar que o pirmeiro > segundo
    else return 1 // valorBusca > obj.first_name
}

let nums = [4, 16, 22, 29, 35, 44, 52, 58, 66, 71, 80, 88, 94]

console.log(buscaBinaria(nums, 66, (elPos, busca) => {
    if(busca === elPos) return 0
    else if (busca < elPos) return -1
    else return 1
}))

// Termina a execução sem passar pelas linhas abaixo
// process.exit(0) // 0 = saindo sem erros


let listaNomes = require('./dados/lista-nomes')

console.time('FAUSTO')
console.log(buscaBinaria(listaNomes, 'FAUSTO', comparaNome))
console.timeEnd('FAUSTO')
console.log('Comparações: ', comp)

console.log('----------------------------------------------')
comp = 0

console.time('FAUSTO1')
console.log(buscaBinaria(listaNomes, 'FAUSTO', (obj, busca) => {
    if(busca == obj.first_name) return 0
    else if(busca < obj.first_name) return -1
    else return 1
}))
console.timeEnd('FAUSTO1')
console.log('Comparações: ', comp)

console.log('----------------------------------------------')
comp = 0

console.time('FAUSTO2')
console.log(buscaBinaria(listaNomes, 'FAUSTO', comparaNome))
console.timeEnd('FAUSTO2')
console.log('Comparações: ', comp)

console.log('----------------------------------------------')
comp = 0

console.time('DOUGLAS')
console.log(buscaBinaria(listaNomes, 'DOUGLAS', (obj, busca) => {
    if(busca == obj.first_name) return 0
    else if(busca < obj.first_name) return -1
    else return 1
}))
console.timeEnd('DOUGLAS')
console.log('Comparações: ', comp)