// // OBJETOS

// let persona = {
//     nombre: 'Juan',
//     edad: 31,
//     ciudad: 'Buenos Aires',
//     hermanos: ['Florencia', 'Lucia'],
//     saludar: (nombre) => console.log(`Hola ${nombre}, como estas?`),
//     active: true

// }

// // Acceder a un valor de un objeto
// // Dot notation y Bracket notation

// console.log(persona.nombre)
// console.log(persona.saludar())

// console.log(persona['nombre'])
// console.log(persona['saludar']('asdasd'))

// //Modificar Objetos

// persona.nombre = 'Carlos' // modifica una propiedad existente
// persona['nombre'] = 'Carlos'

// persona.pais = 'Argentina' // a;ade una propiedad nueva
// persona['pais'] = 'Argentina'

// // Objetos adentro de objetos

// let auto = {
//     marca: 'Tesla',
//     modelo: 'Model Y',
//     kilometros: 0,
//     nuevo: true,
//     arrancar: () => alert('auto encendido'),
//     partes: 
//         [
//         {nombre: 'motor', estado: 'nuevo'},
//         {nombre: 'bateria', estado: 'nuevo'}
//         ]
// }

// console.log(auto['partes'][0]['nombre'])

// // Iterar un objeto

// for(const propiedad in auto){
//     console.log(`${propiedad} : ${auto[propiedad]}`)
// }



