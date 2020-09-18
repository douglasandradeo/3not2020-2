function selectionSort(vetor) {
    let passadas = 0, comparacoes = 0, totalTrocas = 0    
    
    // Função que encontra o menor valor em um segmento de vetor (subvetor)
    // A função deve retornar A POSIÇÃO do menor valor encontrado
    function encontraMenor(vetor, inicio) {
        let posMenor = inicio
        for(let i = inicio + 1; i < vetor.length; i++) {
            if(vetor[i] < vetor[posMenor]) posMenor = i
            comparacoes++
        }
        return posMenor
    }
    
    // o for externo vai até a PENÚLTIMA posição
    for(i = 0; i < vetor.length - 1; i++) {
        passadas++
        // Busca-se o menor valor no restante do vetor
        posMenor = encontraMenor(vetor, i + 1)

        // Caso o valor encontrado seja menor que o valor atual,
        // procede-se à troca
        comparacoes++
        if(vetor[posMenor] < vetor [i]) {
            [vetor[posMenor], vetor[i]] = [vetor[i], vetor[posMenor]]
            totalTrocas++
        }
    }
    console.log({passadas, comparacoes, totalTrocas})
}

/* 

const nums = [56, 78, 44, 23, 99, 14, 60, 37, 6, 82, 31, 65]

console.log(nums)

console.time('selection')
console.log(selectionSort(nums)) // Retornar 8 (posição do valor 6)
console.timeEnd('selection')

console.log('-----------------------------------------------')

console.log(nums)

*/

let listanomes = require('./dados/100-mil-nomes')

console.time('Nomes')
console.log(selectionSort(listanomes))
console.timeEnd('Nomes')