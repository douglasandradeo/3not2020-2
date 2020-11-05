module.exports = class Deque {
    
    constructor() {
        this.data = [] // Armazenamento
    }

    // Inserção no início
    insertFront(value) {
        this.data.unshift(value)
    }

    // Inserção no fim
    insertRear(value) {
        this.data.push(value)
    }

    // Remoção do início
    removefront() {
        return this.data.shift()
    }

    // Remoção do fim
    removeRear() {
        return this.data.pop()
    }

    // "Olhadinha" (no início da fila)
    peekFront() {
        return this.data[0]
    }

    // "Olhadinha" (no fim da fila)
    peekRear() {
        return this.data[this.data.length - 1]
    }

    // Tamanho do Deque
    size() {
        return this.data.length
    }
}