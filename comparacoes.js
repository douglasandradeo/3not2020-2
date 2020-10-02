/*// Comparando dois números distintos
let a = 10, b = 7
console.log(a > b)
console.log(b > a)

console.log('-----------------------------')

// Comparando duas strings distintas
let x = 'abacaxi', y = 'jabuticaba' // -> Se fossem palavras com acento, provavelmente ficariam no final, independente da letra
console.log(x > y)                  // porque considera-se a tabela ASCII
console.log(y > x)
*/
console.log('-----------------------------')

// Comparando dois objetos
let carro1 = {modelo: 'Fusca', marca: 'VW', ano: 1969}
let carro2 = {modelo: 'Palio', marca: 'Fiat', ano: 2011}
console.log(carro1 > carro2)
console.log(carro2 > carro1)
console.log(carro1 == carro2)

if(carro1 == carro2) console.log('verde')
else if(carro2 < carro1) console.log('amarelo')
else console.log('vermelho')

console.log('-----------------------------')


/*
// Comparando booleanos
console.log(true > false)
console.log(false > true)

console.log('-----------------------------')

// Tipos de dados comparáveis em JS são, apenas:
// - Number
// - String
// - Boolean

*/