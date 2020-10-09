/*
    Área do retângulo: base * altura
    Área do triângulo: 
*/

let retangulo = {
    base: 2.5,
    altura: 4.5,
    tipo: 'R' // Retângulo
}

let triangulo = {
    base: 2.5,
    altura: 4.5,
    tipo: 'T' // Triângulo
}

let elipse = {
    base: 2.5,
    altura: 4.5,
    tipo: 'E' // Elipse
}

let tchonga = {
    gambi: 'arra',
    trem: 'coisa',
    treco: 'troço'
}

const area = forma => {
    switch(forma.tipo) {
        case 'R':
            return forma.base * forma.altura
        case 'T':
            return forma.base * forma.altura / 2
        case 'E':
            return (forma.base / 2) * (forma.altura / 2) * Math.PI
        default:
            return null     // Passando um tipo de forma inválido
    }
}

console.log(area(retangulo))
console.log('--------------')
console.log(area(triangulo))
console.log('--------------')
console.log(area(elipse))
console.log('--------------')
console.log(area(tchonga))
console.log('--------------')