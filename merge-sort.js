// Resultado esperado [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]
// console.log(mesclarVetores([1, 2, 5, 7, 8],[0, 3, 4, 6, 9]))
// console.log(mesclarVetores([0, 4, 7, 15, 9],[1, 2, 3, 4, 5, 6]))
let comparacoes = 0, divisoes = 0, juncoes = 0

function mergeSort(vetor) {
    

    // Recebe dois vetores JÁ ORDENADOS PREVIAMENTE e os mescla
    // em um único vetor, também ORDENADO
    function mesclarVetores(vetEsq, vetDir) {
        let vetRes = [], posEsq = 0, posDir = 0, sobra

        while(posEsq < vetEsq.length && posDir < vetDir.length) {
            comparacoes++
            if(vetEsq[posEsq] < vetDir[posDir]) {
                vetRes.push(vetEsq[posEsq])
                posEsq++
            }
            else { //vetDir[posDir] < vetEsq[posEsq]
                vetRes.push(vetDir[posDir])
                posDir++
            }
        }
        
        // slice(): retorna um subvetor a partir da posição especificada até o fim
        // Sobra no vetor da esquerda
        if(posEsq < posDir) sobra = vetEsq.slice(posEsq)
        // Sobra no vetor da direita
        else sobra = vetDir.slice(posDir)

        // console.log({posEsq, posDir, sobra})

        // A sobra é acrescentada ao resultado final
        return vetRes.concat(sobra)
    }

    if(vetor.length > 1) { 
        // Encontra o meio do vetor
        let meio = Math.floor(vetor.length / 2)
        let vetEsq = vetor.slice(0, meio) // A posição do meio NÃO entra
        let vetDir = vetor.slice(meio)
        divisoes++
        vetEsq = mergeSort(vetEsq)
        vetDir = mergeSort(vetDir)
        juncoes++

        return mesclarVetores(vetEsq, vetDir)
    }
    return vetor
}

//console.log(mergeSort([15, 15, 16, 84, 1, 9, 98, 66, 105, 7433, 147, 124, 457, 14, 77, 2, 3, 34, 135]))

const nomes = require('./dados/100-mil-nomes')
console.time('nomes')
console.log(mergeSort(nomes))
console.timeEnd('nomes')
let memoria = process.memoryUsage().heapUsed / 1024 / 1024
console.log('Memória usada (MB): ', memoria)
console.log({comparacoes, divisoes, juncoes})