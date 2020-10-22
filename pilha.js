const Stack = require ('./lib/Stack')

let pilha = new Stack()

let texto = "Eu sou o Dogras, você não é o Dogras"

for(let i = 0; i < texto.length; i++) {
    // Inserção na pilha deve sempre ser feita ao FINAL
    pilha.push(texto.charAt(i))
}

console.log(pilha)

let inverso = ''
while(pilha.size() > 0) {
    // Retiradas na pilha devem ser feitas também no FINAL
    inverso += pilha.pop()
}

console.log(pilha)
console.log(inverso)
// Função nativa de inverter string do JavaScript

/*
console.log(pilha.reverse())
*/