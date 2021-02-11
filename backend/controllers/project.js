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
    },
    //Método para listar un documneto por medio de su id
    getProject: function(req, res) {
        var projectId = req.params.id;
        if(projectId == null) return res.status(404).send({ message: "No se ha encontrado el proyecto" })

        //Buscar en la base de datos po medio de id del documento
        Project.findById(projectId, function(error, project) {
            if(error) return res.status(500).send({ message: "Error al devolver los datos" })

            if(!project) return res.status(404).send({ message: "No se ha encontrado el proyecto" })

            res.status(500).send({ project })
        })
    },
    //Método para obtener todos los proyectos
    getProjects: function(req, res) {         /*Ordenar por atributo*/
        Project.find({/*Se filtra por tributo*/ }).sort('name').exec((error, projects) => {
            if(error) return res.status(500).send({ message: "Error al enviar los datos" })

            if(!projects) return res.status(404).send({ message: "No hay ningún proyecto para mostrar" })

            res.status(200).send({ projects })
        })
    },
    //Método para actualizar algún proyecto
    updateProject: function(req, res) {
        var projectId = req.params.id;
        var update = req.body;
        //Tomar el id y actualizar lo que tenga ese documento
        Project.findByIdAndUpdate(projectId, update, {new: true}, ((error, projectUpdate) =>  {
            if(error) return res.status(500).send({ message: "Error al actualizar el proyecto" })

            if(!projectUpdate) return res.status(404).send({ message: "No se encontró el proyecto para actualizar" })

            res.status(200).send({ projectUpdate })
        }))
    },
    //Método para borrar un proyecto
    deleteProject: function(req, res) {
        var projectId = req.params.id;

        Project.findByIdAndRemove(projectId, (error, projectRemoved) =>{
            if(error) return res.status(500).send({ message: "Error al borrar el proyecto" })

            if(!projectRemoved) return res.status(404).send({ message: "No se encontró el proyecto para eliminar" })

            res.status(200).send({ projectRemoved})
        })
    }

 };

module.exports = controller;