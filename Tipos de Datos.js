// Number
const entero = 42 // un nro sin comas --> int -> integer
console.log({ entero })
const decimal = 3.14 // un nro con coma (de punto flotanbte) --> float
console.log({ decimal })

// String --> Cadena de caracteres
const nombre = 'Fabio' // comillas simples
console.log({ nombre })
// const cadenaConDobles = "Hola Mundo" // comillas dobles
const mensaje = `Hola ${nombre}`
console.log({ mensaje })

// Booleanos o lógicos
const verdadero = true
console.log({ verdadero })
const falso = false
console.log({ falso })
console.assert(' ', 'Lo anterior dio como valor falso')
console.assert(0, 'Lo anterior dio como valor falso')
console.assert(0.0, 'Lo anterior dio como valor falso')

// Null o Nulo
const nulo = null // Intencionalmente sin valor
console.log({ nulo })
console.log(typeof nulo)

// Undefined o Indefinido
let valorIndefinido // No se ha asignado un valor aun
console.log(valorIndefinido)

// Objeto
const persona = {
  nombre: 'Fabio',
  edad: 42
}

console.table(persona)

// arrays o arreglos o vectores o matrices unidimensionales
const lista = [1, 2, 3, 4, 5]
const frutas = ['anana', 'uva', 'sandia']
console.table(lista)
console.table(frutas)
console.log(typeof lista)
console.log(frutas[3])

// Functions o funciones
const saludar = function () {
  console.log('Hola Mundo!')
}

saludar()
console.log(typeof saludar)

// Symbol
const simbolo1 = Symbol('mi-simbolo')
const simbolo2 = Symbol('mi-simbolo') // cada simbolo es unico

// Big Int --> Enteros Grandes
const enteroGrande = 12345678901234567890n
console.log(enteroGrande)
