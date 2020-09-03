// Busca sequencial
// Parâmetros:
// 1o: lista de itens a ser pesquisada
// 2o: valor a ser pesquisado
// Retorno:
// A posição da lista onde foi encontrado o valor pequisado OU
// o valor convencionado -1 caso o valor buscado não tenha sido encontrado

function buscaSequencial(lista, valorBusca, fnComp) {
    for(let i = 0; i < lista.length; i++) {
        // Encontrou o que está buscando: retorna a posição
        // em que foi encontrado
        // if(lista[i] === valorBusca) return i
        if(fnComp(lista[i], valorBusca)) return i
    }
    return -1 // valorBusca não foi encontrado em lista
}

const listaNomes = require('./dados/lista-nomes')

function comparaNome(obj, nome) {
    // Retorna true se o atributo first_name do objeto for igual a nome
    return obj.first_name === nome
}

// modelo tradicional
console.time('FAUSTO')
console.log(buscaSequencial(listaNomes, 'FAUSTO', comparaNome))
console.timeEnd('FAUSTO')

console.log('-------------------------')

//utilizando arrow function sem necessidade de nova função
console.time('FAUSTO')
console.log(buscaSequencial(listaNomes, 'FAUSTO', (obj, nome) => obj.first_name === nome))
console.timeEnd('FAUSTO')

console.log('-------------------------')

console.time('10000+')
// Encontrar o primeiro nome da lista em que possui mais de 10000 pessoas registradas com ele
let pos = (buscaSequencial(listaNomes, '10000', (obj, valor) => obj.frequency_total > valor))
// Exibe o objeto da posição encontrada e depois a própria posição
console.log(listaNomes[pos], pos)
console.timeEnd('10000+')

console.log('-------------------------')