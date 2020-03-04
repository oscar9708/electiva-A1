// PRACTICA CON LIBRERIA DE ARCHIVOS DE SISTEMA 'HTTP'  NODEJS  'http.createServer'
// const http = require('http');
// http.createServer(function(req, res){
//     res.writeHead(200, {'Content-type': 'text/html'});
//     res.write('<h1> Hola Mundo </h1>');
//     res.end();
// }).listen(3000);


// PRACTICA CON LIBRERIA DE ARCHIVOS DE SISTEMA 'HTTP'  NODEJS 'http.createServer'
// ENVIANDO DISTINTOS TIPOS DE SALIDA DE TEXTO Y FUNCIONES DIRECTAS DE HTTP DE NODEJS //     res.writeHead(200, {'Content-type': ---'text/plain'---}); // http.createServer(function(req, res){
// res.writeHead(200, type-contet
// const http = require('http');
// http.createServer(function(req, res){
//     res.writeHead(200, {'Content-type': 'text/plain'});
//     res.write('esto es un simple texto');
//     res.end();
// }).listen(3000);


// PRACTICA CON LIBRERIA DE ARCHIVOS DE SISTEMA 'HTTP'  NODEJS 'http.createServer'
// ENVIANDO DISTINTOS TIPOS DE SALIDA DE ERRORES SEGUN LA NORMA HTTP Y FUNCIONES DIRECTAS DE HTTP DE NODEJS//   res.writeHead(---404---, {'Content-type': 'text/plain'}); // http.createServer(function(req, res){
// const http = require('http');
// http.createServer(function(req, res){
//     res.writeHead(404, {'Content-type': 'text/plain'});
//     res.write('esto es un simple texto');
//     res.end();
// }).listen(3000);


// PRACTICA CON LIBRERIA DE ARCHIVOS DE SISTEMA 'HTTP'  NODEJS 'http.createServer'
// ENVIANDO DISTINTOS TIPOS DE SALIDA DE ERRORES SEGUN LA NORMA HTTP Y UTILIXANDO OBJETOS PARA MODULARIZAR//   res.writeHead(---404---, {'Content-type': 'text/plain'}); const handleServer = (function(req, res){
// const http = require('http');
// const handleServer = (function(req, res){
//     res.writeHead(404, {'Content-type': 'text/plain'});
//     res.write('esto es un simple texto');
//     res.end();
// })
// http.createServer(handleServer).listen(3000);


// PRACTICA CON LIBRERIA DE ARCHIVOS DE SISTEMA 'HTTP, COLORS'  NODEJS 'http.createServer'
// ENVIANDO DISTINTOS TIPOS DE SALIDA DE ERRORES SEGUN LA NORMA HTTP Y UTILIXANDO OBJETOS PARA MODULARIZAR MAS PROFUNDO//   res.writeHead(---404---, {'Content-type': 'text/plain'}); const handleServer = (function(req, res){
// const http = require('http');
// const colors = require('colors');

// const handleServer = function(req, res){
//     res.writeHead(200, {'Content-type': 'text/html'});
//     res.write('<h1>Hola Mundo</h1>');
//     res.end();
// }

// const server = http.createServer(handleServer);

// server.listen(3000, function(){
//     console.log('Server on port 3000'.yellow);
// });



// PRACTICA CON LIBRERIA DE 'EXPRESS, COLORS'  NODEJS 'http.createServer'
// const express = require('express');
// const colors = require('colors');

// const server = express();

// server.get('/', function(req, res) {
//     res.send('<h1>Hola Mundo Con Express Y Node</h1>');
//     res.end();
// });

// server.listen(3000, function() {
//     console.log('Server on port 3000'.red)

// });