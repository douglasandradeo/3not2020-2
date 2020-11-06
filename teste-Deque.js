/*
const Deque = require('./lib/Deque')

let deque = new Deque()

console.log(deque)

deque.insertRear('Zozimário')
deque.insertRear('Zozimaria')
deque.insertRear('Zozi')
deque.insertRear('Maria')
deque.insertRear('Mario')
deque.insertRear('João')
deque.insertRear('Carlos')

console.table(deque)

// Fura-fila
deque.insertFront('Gaiato')
console.table(deque)

// Verificando as pontas do deque
let primeiro = deque.peekFront()
let ultimo = deque.peekRear()
console.log(deque)
console.log({primeiro, ultimo})

// Desistência do último colocado
let desistente = deque.removeRear()
console.table(deque)
console.log({desistente})
*/

const Deque = require('./lib/Deque2')

let deque = new Deque()

console.log(deque)

deque.insertRear('Zozimário')
deque.insertRear('Zozimaria')
deque.insertRear('Zozi')
deque.insertRear('Maria')
deque.insertRear('Mario')
deque.insertRear('João')
deque.insertRear('Carlos')

console.table(deque)

// Fura-fila
deque.insertFront('Gaiato')
console.table(deque)

// Verificando as pontas do deque
let primeiro = deque.peekFront()
let ultimo = deque.peekRear()
console.log(deque)
console.log({primeiro, ultimo})

// Desistência do último colocado
let desistente = deque.removeRear()
console.table(deque)
console.log({desistente})