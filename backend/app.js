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
app.use((req, res, next) => {
	res.header('Access-Control-Allow-Origin', '*');
	res.header('Access-Control-Allow-Headers', 'Authorization, X-API-KEY, Origin, X-Requested-With, Content-Type, Accept, Access-Control-Allow-Request-Method');
	res.header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, DELETE');
	res.header('Allow', 'GET, POST, OPTIONS, PUT, DELETE');
	next();
});

//Rutas
    // /api/home || /api/test
app.use('/api', project_routes);    

//Exportar
module.exports = app;