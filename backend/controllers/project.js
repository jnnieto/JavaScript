'use strict'

//Importar el modelo de projects
const Project = require('../models/project')

var controller = {
    home: function(req, res) {
        return res.status(200).send({
            message: 'Soy la Home'
        })
    },
    test: function(req, res) {  
        return res.status(200).send({
            message: 'Soy el método a acción test del controlador de projects'
        })
    },
    //Método para guardar documentos en la colección
    saveProject: function(req, res) {
        var project = new Project();
        var params = req.body;

        //Se asignan los datos que vienen del body a cada una de las variables del modelo
        project.name = params.name;
        project.description = params.description;
        project.category = params.category;
        project.years = params.years
        project.langs = params.langs;
        project.image = null;

        project.save((error, projectStore) => {
            //Se valida de que no haya ningún tipo de error
            if(error) return res.status(500).send({message: "Error en la petición para guardar"})
            // se valida de que lo que se vaya a enviar no esté vacío
            if(!projectStore) return res.status(404).send({message: "No se ha podido guardar el proyecto"})
            //Se envía el dato a la base de datos
            res.status(500).send({ project: projectStore })
        });
    }
};

module.exports = controller;