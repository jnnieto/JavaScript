'use strict'

const mongoose = require('mongoose');
const schema = mongoose.Schema;
const ProjectSchema = schema({
    //Poner cada uno de los datos de la coleccion de la base de datos
    name: String,
    description: String,
    category: String,
    years: Number,
    langs: String,
    image: String
});

module.exports = mongoose.model('Project', ProjectSchema)
//projects--> Guarda los documentos en esa colección