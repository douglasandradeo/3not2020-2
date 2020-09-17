/*
    Adaptando o algoritmo Bubble Sort para operar com vetor de objetos
    1)  Acrescentar um novo parâmetro, que vai corresponder à função de
        comparação (fnComp).
    2)  Essa função será chamada de dentro do bubbleSort(), recebendo o
        elemento da posição atual e da posição seguinte como parâmetros.
        Ela deve retornar true caso o primeiro parâmetro seja maior que
        o segundo, ou false caso contrário.
*/
function bubbleSort(vetor, fnComp) {
    let passadas = 0, comparacoes = 0, totalTrocas = 0
    let trocas
    do {
        passadas++
        trocas = 0
        // Percurso do vetor até a PENÚLTIMA POSIÇÃO (length - 2)
        for(let i = 0; i <= vetor.length - 2; i++) {
            comparacoes++
            // Comparando o elemento da posição atual (i)
            // com o elemento da frente (i + 1)
            // if(vetor[i] > vetor[i + 1])
            if(fnComp(vetor[i], vetor[i + 1])) {
                // Comparando o elemento da posição atual (i)
                // com o elemento da frente (i+ 1)
                // Troca usando desestruturação de vetor
                [vetor[i], vetor[i + 1]] = [vetor[i + 1], vetor[i]]
                trocas++
                totalTrocas++
            }
        }
    } while(trocas > 0)
    // Exibindo as estatísticas
    console.log({passadas, comparacoes, totalTrocas})
}

const candidatos = require('./dados/candidatos-2018')



console.time('candidato')
//bubbleSort(candidatos, (a, b) => a.NM_URNA_CANDIDATO < b.NM_URNA_CANDIDATO)
bubbleSort(candidatos, (a, b) => a.NM_CANDIDATO > b.NM_CANDIDATO)
console.timeEnd('candidato')

console.log(candidatos)

/*

// Teste com localeCompare() faz corretamente a ordenação considerando os acentos, mas é MUITO mais
// lento do que a comparação binária padrão

// Diminuir os dados a serem analisados
const candidatos100 = candidatos.slice(0, 99)

console.time('candidato100')
bubbleSort(candidatos100, (a, b) => a.NM_URNA_CANDIDATO.localeCompare(b.NM_URNA_CANDIDATO, 'pt-BR') > 0)
console.timeEnd('candidato100')

console.log(candidatos100)

*/

// Fazendo um map() para produzir um novo vetor só com os nomes dos candidatos
const nomeCandidatos = candidatos.map(o => [o.NM_CANDIDATO, o.NM_URNA_CANDIDATO]) // o = vetor será substituido por o.NM_CANDIDATO, apenas uma variável
console.log(nomeCandidatos)