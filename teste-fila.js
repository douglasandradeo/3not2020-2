const Queue = require('./lib/Queue2')

let fila = new Queue()

console.log(fila)

fila.enqueue('Daglas')
fila.enqueue('Deglas')
fila.enqueue('Diglas')
fila.enqueue('Doglas')
fila.enqueue('Duglas')

console.log(fila)

let proximo = fila.dequeue()
console.log({proximo})
console.log(fila)

fila.enqueue('Douglas')

let primeiro = fila.peek()
console.log({primeiro})
console.table(fila)