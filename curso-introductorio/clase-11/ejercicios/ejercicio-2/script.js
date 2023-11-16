// Aumentar la nota

const estudiantes = [
    { nombre: 'Juan', nota: 7 },
    { nombre: 'María', nota: 9 },
    { nombre: 'Pedro', nota: 6 },
    { nombre: 'Luisa', nota: 3 },
    { nombre: 'Ana', nota: 5 },
    { nombre: 'Carlos', nota: 2 },
    { nombre: 'Albert', nota: 8 }
  ];

estudiantes.forEach((e) => {
    let primerNota = e['nota']
    if(e['nota'] >= 5){
        let notaAumentada = e['nota'] + 2
        e['nota'] = notaAumentada > 10 ? 10 : notaAumentada    
    }   
        let nuevaNota = e['nota']
        console.log(`Nombre: ${e['nombre']} | Nota: ${primerNota} - Nueva Nota: ${nuevaNota}`)   
})

  

  