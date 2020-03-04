


// PRACTICA CON LIBRERIA DE ARCHIVOS DE SISTEMA 'FS' DEMOSTRANDO LA PROGRAMACION ASINCRONA DE NODEJS  'fs.writeFile'
// CONSISTE ES ASIGNAR Y DELEGAR TAREAS AL SISTEMA OPERATIVO. PERO NODEJS SIGUE EJECUANDO SU CODIGO EN LAS SIGUIENTE LINEAS
const fs = require('fs');
fs.writeFile('./texto.txt', 'linea_uno', function (err){
    if (err){
        console.log(err);
    }
    console.log('Archivo Creado');
})
console.log('ultima linea de codigo');


// PRACTICA CON LIBRERIA DE ARCHIVOS DE SISTEMA 'FS' DEMOSTRANDO LA PROGRAMACION ASINCRONA DE NODEJS  'fs.readFile'
// PARA VISUALIZAR ARCHIVOS
const fs = require('fs');
fs.readFile('./texto.txt',  function (err, data){
    if (err){
        console.log(err);
    }
    console.log(data.toString());
})
