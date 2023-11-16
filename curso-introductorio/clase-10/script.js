// ARRAYS

let arrayNum = [0, 1, 2, 3, 4, 5]
let arrayStr = ['verde', 'azul', 'rojo', 'violeta']
let arrayMisc = [true, false, undefined, null, function name(){}]

console.log(arrayNum, arrayStr, arrayMisc)

//Indice empieza en 0 [0]
//Posicion empieza en 1

console.log(arrayNum[0]) // devuelve '0'

console.log(arrayStr[2]) // devuelve 'rojo'

console.log(arrayNum[arrayNum.lenght - 1]) // devuelve el ultimo elemento del array

//METODOS

arrayNum.push(6) // agrega un elemento al final del array
console.log(arrayNum)

arrayNum.pop() // elimina el ultimo elemento del array
console.log(arrayNum)

arrayStr.unshift('amarillo') // agrega un elemento al principio del array
console.log(arrayStr)

arrayStr.shift() // elimina el primer elemento del array
console.log(arrayStr)

console.log(arrayStr.indexOf('rojo')) // nos devuelve el indice del elemento pasado como argumento

let notas = [10, 6, 3, 7, 4, 1, 2, 8]

let aprobados = notas.filter((nota) => {
    return nota >= 6
}) //devuelve los elementos filtrados segun la condicion especificada
console.log(aprobados)

let notas2 = notas.slice(0) // copia el array desde el indice indicado
console.log(notas2)

notas2.splice(1, 3) // elimina los elementos inidcados, el primer argumento es el indice y el segundo es la cantidad de elementos a eliminar
console.log(notas2)

let nombres = ['Ana', 'Juan', 'María', 'Carlos', 'Laura', 'Pedro', 'Sofía', 'Luis'];
let nombresJuntos = nombres.join('-') // convierte el arreglo en una cadena de texto separada por el simbolo indicado
console.log(nombresJuntos)

let texto = 'Este texto se puede convertir en un array con el metodo split'
let textToArray = texto.split(' ') // convierte una cadena de texto a un arreglo
console.log(textToArray)

let numeros = [0, 1, 6, 9, 15, 178]
// itera en cada uno de los elementos del array y los devuelve
for(let i = 0; i <= numeros.length; i++){
    console.log(numeros[i])
}

numeros.forEach((e) => {
    console.log(e) 
})