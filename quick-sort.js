/*
function quickSort(vetor) { 
    

    function processo(vetEsq, vetDir) {

    
        let pivo = vetor.length
        let x = -1

        for(i = 0; i = vetor.length - 1; i++) {
            if(vetor[i] > vetor[pivo]) {
                i++
            }
            else if(vetor[i] < vetor[pivo]) {
                x++
                [vetor[x], vetor[i]] = [vetor[i], vetor[x]] 
            }
        }
    }
}
*/

let passadas = 0, comparacoes = 0, trocas = 0
function quickSort(vetor, inicio = 0, fim = vetor.length - 1) {
    //console.log({vetor, inicio, fim})
    if(fim > inicio) { // Garante que haja, PELO MENOS, DOIS elementos para ordenar
        passadas++
        let posDiv = inicio - 1
        let posPivot = fim

        for(let i = inicio; i < fim; i++) {
            comparacoes++
            if(vetor[i] < vetor[posPivot]) { 
                posDiv++
                [vetor[i], vetor[posDiv]] = [vetor[posDiv], vetor[i]]
                trocas++
            }
        }
        // Último incremento de posDiv, após o loop terminar
        posDiv++
        [vetor[posDiv], vetor[posPivot]] = [vetor[posPivot], vetor[posDiv]]
        trocas++
        //console.log({posDiv})

        quickSort(vetor, inicio, posDiv - 1) // lado esquerdo
        quickSort(vetor, posDiv + 1, fim)    // lado direito
    }
}   

/*
let nums = [55, 5, 10, 15, 50, 45, 40, 35, 20, 25, 30]

quickSort(nums)
console.log(nums)
console.log({passadas, comparacoes, trocas})
*/

const nomes = require('./dados/100-mil-nomes')
console.time('teste')
quickSort(nomes)
console.timeEnd('teste')
console.log(nomes)
console.log('Memória usada (MB): ', process.memoryUsage().heapUsed / 1024 / 1024)
console.log({passadas, comparacoes, trocas})