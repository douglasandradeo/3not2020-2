// Pré-requisiro para a busca biária: o conjunto de dados
// PRECISA estar ordenado pelo critério de busca
// Método Raul Seixas: Início, fim e o meio
let comp = 0
function buscaBinario(lista, valorBusca) {
    let inicio = 0
    let fim = lista.length -1
    
    while(fim >= inicio) {
        // Math.floor(): retira as casas decimais de um número arredondando para baixo
        // Math.ceil(): arredonda para baixo
        // Math.round(): arredonda conforme regra matemática se for até .4 arredonda para baixo, .5 acima arredonda para cima
        let meio = Math.floor((fim + inicio) / 2)

        // Verifica se o valor na posição média é o valor de busca
        if(valorBusca === lista[meio]) {
            comp++ // Uma comparação foi realizada
            return meio
        }
        else if(valorBusca < lista[meio]) {
            comp += 2 // Duas comparação foi realizada
            fim = meio -1
        }
        else { //valorBusca > lista[meio]
            comp += 2 // Duas comparação foi realizada
            inicio = meio + 1
        }
    }
    return -1 // Valor não encontrado
}

let vetorNomes = require('./dados/vetor-nomes')

console.time('FAUSTO')
console.log(buscaBinario(vetorNomes, 'FAUSTO'))
console.timeEnd('FAUSTO')
console.log('Comparações', comp)

console.log('----------------------------------')

comp = 0

console.time('DOUGLAS')
console.log(buscaBinario(vetorNomes, 'DOUGLAS'))
console.timeEnd('DOUGLAS')
console.log('Comparações', comp)
