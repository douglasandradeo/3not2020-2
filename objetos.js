// Declaração de objeto vazio
let pessoa1 = {}                // Método moderno
let pessoa2 = new Object()      // Método tradicional

// Declarando e inicializando um objeto já com propriedades
// - propriedades -> atributo + valor
let pessoa3 = {
    Nome: 'Douglas Andrade',
    Naturalidade: 'Osasco-SP',
    "Data de nascimento": '1994-13-06',
    Estudante_fatec: true
}

// Acessando uma propriedade de um objeto
// Atributo é uma única palavra -> sintaxe do ponto
console.log(pessoa3.Nome)
console.log(pessoa3.Estudante_fatec)

// Acessando uma propriedade composta por várias palavras ->
// Sintaxe dos colchetes
// PS: não usa-se ponto / indicado usar aspas duplas, pois no jason só acata aspas duplas
console.log(pessoa3["Data de nascimento"])

// Sintaxe dos colchetes SEMPRE funciona
console.log(pessoa3["Naturalidade"])

let atrib = "nome"
console.log(pessoa3[atrib])

// Criando novas propriedades em um objeto
// -> basta atribuir o valor a um nome de atributo, segundo
// a sintexe apropriada a cada caso
pessoa3.nacionalidade = "Portuguesa"            // Única palavra
pessoa3["Registro de estrangeiro"] = 21567809   // Várias palavras

console.log(pessoa3)

// Eliminando uma propriedade
delete pessoa3.Estudante_fatec

console.log('-----------------------------------')

console.log(pessoa3)

console.log('-----------------------------------')

// Como percorrer todas as propriedades de um objeto: for..in
for(let prop in pessoa3) {
    console.log(prop)   
}

console.log('-----------------------------------')

// Listando atributo e valor de um objeto usando for..in
for(let atrib in pessoa3) {
    //console.log('Atributo: ' + atrib + '; valor: ' + pessoa3[atrib])
    console.log(`Atributo: ${atrib}; valor: ${pessoa3[atrib]}`)
}


