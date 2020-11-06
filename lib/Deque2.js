module.exports = class Deque {
    
    constructor() {    // Igual ao do Queue2
        this.data = [] // Armazenamento
        this.head = 0   // "Cabeça" (início da fila)
        this.tail = -1  // "Cauda" (final da fila)
    }

    // Inserção no início
    insertFront(value) {
        this.head--
        this.data[this.head] = value
    }

    // Inserção no fim
    insertRear(value) {         // Igual ao enqueue() do Queue2
        this.tail++
        this.data[this.tail] = value
    }

    // Remoção do início
    removefront() {             // Igual ao dequeue() do Queue2
        let value = this.data[this.head]
        delete this.data[this.head]
        this.head++
        return value
    }

    // Remoção do fim
    removeRear() {
        let value = this.data[this.tail]
        delete this.data[this.tail]
        this.tail--
        return value
    }

    // "Olhadinha" (no início da fila)
    peekFront() {               // Igual ao peek() do Queue2
        return this.data[this.head]
    }

    // "Olhadinha" (no fim da fila)
    peekRear() {
        return this.data[this.data.length - 1]
    }

    // Tamanho do Deque
    size() {                // Igual ao size() do Queue2
        return this.tail - this.head + 1
    }
}