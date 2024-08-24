// calculadora.test.js
const Calculadora = require('./calculadora');

describe('Calculadora Mejorada', () => {
    let calculadora;

    beforeEach(() => {
        calculadora = new Calculadora();
    });

    test('debería sumar dos números positivos correctamente', () => {
        expect(calculadora.sumar(3, 4)).toBe(7);
    });

    test('debería restar dos números correctamente', () => {
        expect(calculadora.restar(10, 4)).toBe(6);
    });

    test('debería multiplicar dos números correctamente', () => {
        expect(calculadora.multiplicar(3, 5)).toBe(15);
    });

    test('debería dividir dos números correctamente', () => {
        expect(calculadora.dividir(15, 3)).toBe(5);
    });

    test('debería lanzar un error al dividir por cero', () => {
        expect(() => calculadora.dividir(5, 0)).toThrow("No se puede dividir por cero.");
    });

    test('debería exponenciar un número correctamente', () => {
        expect(calculadora.exponenciar(2, 3)).toBe(8);
        expect(calculadora.exponenciar(5, 0)).toBe(1);
    });

    test('debería calcular la raíz cuadrada correctamente', () => {
        expect(calculadora.raizCuadrada(16)).toBe(4);
        expect(calculadora.raizCuadrada(1)).toBe(1);
    });

    test('debería lanzar un error al calcular la raíz cuadrada de un número negativo', () => {
        expect(() => calculadora.raizCuadrada(-4)).toThrow("La entrada debe ser un número no negativo.");
    });

    test('debería calcular el porcentaje correctamente', () => {
        expect(calculadora.porcentaje(50, 200)).toBe(5);
        expect(calculadora.porcentaje(30, 60)).toBe(50);
    });

    test('debería recordar el último resultado de la memoria', () => {
        calculadora.sumar(5, 5);
        expect(calculadora.recordarMemoria()).toBe(10);
    });

    test('debería borrar la memoria correctamente', () => {
        calculadora.sumar(5, 5);
        calculadora.limpiarMemoria();
        expect(calculadora.recordarMemoria()).toBeNull();
    });

    test('debería lanzar un error para entradas que no son números', () => {
        expect(() => calculadora.sumar(5, "5")).toThrow("Ambas entradas deben ser números.");
        expect(() => calculadora.dividir("10", 2)).toThrow("Ambas entradas deben ser números.");
    });
});
