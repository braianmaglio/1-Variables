let suma = 1 + 2
suma += 1 // suma = suma + 1
console.log({ suma })

let resta = 1 - 2
resta -= 1
console.log({ resta })

let multiplicacion = 2 * 3
multiplicacion *= 2
console.log({ multiplicacion })

const division = 2 / 3
console.log({ division })

const potencia = 2 ** 3 // 2³ = 2*2*2
console.log({ potencia })

const modulo = 15 % 4
console.log({ modulo })

// operador de incremento
let contador = 0
console.log({ contador })
// Pre incremento
console.log(++contador) // Primero ++ y despues clg
// Post incremento
console.log(contador++) // Primero clg y despues ++
console.log({ contador })

// operador de decremento
// Pre incremento
console.log(--contador) // Primero -- y despues clg
// Post incremento
console.log(contador--) // Primero clg y despues --
console.log({ contador })

console.log(5 / 0)
console.log(0 / 0)
console.log(typeof NaN)
console.log(1 - 'pedro')
