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


    