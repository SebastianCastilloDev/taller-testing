// calculadora.js
class Calculadora {
    constructor() {
        this.ultimoResultado = null;
    }

    validarEntrada(a, b) {
        if (typeof a !== 'number' || typeof b !== 'number') {
            throw new Error("Ambas entradas deben ser números.");
        }
    }

    sumar(a, b) {
        this.validarEntrada(a, b);
        this.ultimoResultado = a + b;
        console.log(`Sumando ${a} y ${b}: Resultado = ${this.ultimoResultado}`);
        return this.ultimoResultado;
    }

    restar(a, b) {
        this.validarEntrada(a, b);
        this.ultimoResultado = a - b;
        console.log(`Restando ${b} de ${a}: Resultado = ${this.ultimoResultado}`);
        return this.ultimoResultado;
    }

    multiplicar(a, b) {
        this.validarEntrada(a, b);
        this.ultimoResultado = a * b;
        console.log(`Multiplicando ${a} y ${b}: Resultado = ${this.ultimoResultado}`);
        return this.ultimoResultado;
    }

    dividir(a, b) {
        this.validarEntrada(a, b);
        if (b === 0) {
            throw new Error("No se puede dividir por cero.");
        }
        this.ultimoResultado = a / b;
        console.log(`Dividiendo ${a} entre ${b}: Resultado = ${this.ultimoResultado}`);
        return this.ultimoResultado;
    }

    exponenciar(base, exponente) {
        this.validarEntrada(base, exponente);
        this.ultimoResultado = Math.pow(base, exponente);
        console.log(`Exponenciando ${base} a la potencia de ${exponente}: Resultado = ${this.ultimoResultado}`);
        return this.ultimoResultado;
    }

    raizCuadrada(numero) {
        if (typeof numero !== 'number' || numero < 0) {
            throw new Error("La entrada debe ser un número no negativo.");
        }
        this.ultimoResultado = Math.sqrt(numero);
        console.log(`Calculando la raíz cuadrada de ${numero}: Resultado = ${this.ultimoResultado}`);
        return this.ultimoResultado;
    }

    porcentaje(a, b) {
        this.validarEntrada(a, b);
        this.ultimoResultado = (a / b) * 100;
        console.log(`Calculando ${a} como porcentaje de ${b}: Resultado = ${this.ultimoResultado}%`);
        return this.ultimoResultado;
    }

    recordarMemoria() {
        if (this.ultimoResultado === null) {
            console.log("No se ha realizado ningún cálculo todavía.");
        } else {
            console.log(`Recordando el último resultado: ${this.ultimoResultado}`);
        }
        return this.ultimoResultado;
    }

    limpiarMemoria() {
        console.log("Memoria borrada.");
        this.ultimoResultado = null;
    }
}

module.exports = Calculadora;
