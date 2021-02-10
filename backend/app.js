'use strict'

var express = require('express');
var bodyParser = require('body-parser');

var app = express();

//Cargar archivos deRutas

//Middlewares

//Configuración de BodyParser
app.use(bodyParser.urlencoded({extended: false}))
//Todas las peticiones que llegan se convierte a un JSON
app.use(bodyParser.json())

//CORS

//Rutas
app.get('/', (request, response) =>{
    response.status(200).send(
        "<h1>Hola Mundo desde NODEJS</h1>"
    )
})

app.get('/test', (request, response) =>{
    response.status(200).send({
        mensaje: 'Hola Mundo desde mi API de nodeJs'
    })
})


//Exportar
module.exports = app;