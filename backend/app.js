'use strict'

var express = require('express');
var bodyParser = require('body-parser');

var app = express();

//Cargar archivos de Rutas
const project_routes = require('./routes/project')

//Middlewares

//Configuración de BodyParser
app.use(bodyParser.urlencoded({extended: false}))
//Todas las peticiones que llegan se convierte a un JSON
app.use(bodyParser.json())

//CORS

//Rutas
    // /api/home || /api/test
app.use('/api', project_routes);    

//Exportar
module.exports = app;