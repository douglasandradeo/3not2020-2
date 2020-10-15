// class faz com que haja uma padrão na estrutura dos objetos da mesma classe

class FormaGeometrica {
    constructor(base = 1, altura = 1, tipo = 'R') {

        if(isNaN(base) || base <= 0) {
            throw new Error(`Valor de base: ${base} inválido.`)
        }

        if(isNaN(altura) || altura <= 0) {
            throw new Error('A altura deve ser númerica e maior que zero.')
        }
        
        //if(tipo != 'R' && tipo != 'T' && tipo != 'E') {
        if(['R', 'T', 'E'].indexOf(tipo) < 0) {
            throw new Error('O tipo deve ser R, T ou E.')
        }

        this.base = base
        this.altura = altura
        this.tipo = tipo
    }

       /* Método setter
        
       set base(valor) {
            if(isNaN(valor) || valor <= 0) {
                throw new Error('A base deve ser numérica e maior que zero')
            }
            this._base = valor
        }

        */

        // Método getter
        get 

    // como "area" está dentro do objeto, não precisa receber mais informações sobre sua forma
    area() {
        switch(this.tipo) {
            case 'R':
                return this.base * this.altura
            case 'T':
                return this.base * this.altura / 2
            case 'E':
                return (this.base / 2) * (this.altura / 2) * Math.PI
            default: //Tipo inválido
                return undefined
        }
    }
}

const retangulo = new FormaGeometrica(2, 6.5, 'R')
const triangulo = new FormaGeometrica(4, 6.5, 'T')
const elipse = new FormaGeometrica(4, 6.5, 'E')
const teste = new FormaGeometrica(12, 'arra', 'Y')

console.log(retangulo)
console.log(triangulo)
console.log(elipse)
console.log(teste)

console.log(retangulo.area())


// criamos o objeto com valores-padrão mas é possível alterá-los
retangulo.altura = 6
retangulo.base = 2.75
console.log(retangulo.area())

console.log('Área do teste', teste.area())
console.log('Base do teste', teste.base)