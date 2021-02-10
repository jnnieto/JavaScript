'use strict'

const mongoose = require('mongoose');
const app = require('./app');
const port = 3700;

mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost:27017/portafolio')
       .then(() => {
           console.log('Conexión a base de datos exitosamente')

           //Creación del servidor
            app.listen(port, () => {
                console.log('Servidor corriendo correctamente en la url: localhost:3700')
            });
       })
       .catch(error => console.log(error))