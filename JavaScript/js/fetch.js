"use strict";
//Fetch (ajax) y peticiones a servicios restfull
var div_usuarios = document.querySelector("#usuarios");
var div_kurtis = document.querySelector("#kurtis");
var div_persona = document.querySelector("#persona");

getUsuarios()
    .then((data) => data.json())
    .then((users) => {
        listadoUsuarios(users);
        return getInfo();
    })
    .then(data => {
        div_persona.innerHTML = data;
        return getKurtis();
    })
    .then((data) => data.json())
    .then(kurtis => mostrarKurtis(kurtis))
    .catch(error => {
        alert("Error al cargar las peticiones")
    });

function getUsuarios() {
  return fetch("https://jsonplaceholder.typicode.com/users");
}

function getKurtis() {
  return fetch("https://jsonplaceholder.typicode.com/users/7");
}

function listadoUsuarios(usuarios) {
  usuarios.map((data, i) => {
    let nombre = document.createElement("h3");

    nombre.innerHTML = i + ". " + data.name + " " + data.email;
    div_usuarios.append(nombre);

    document.querySelector(".loading").style.display = "none";
  });
}

function mostrarKurtis(user) {
  let nombre = document.createElement("h4");

  nombre.innerHTML = user.name;
  div_kurtis.append(nombre);

  document.querySelector(".loading2").style.display = "none";
}

//Crear una nueva promesa
function getInfo() {
    var persona = {
        nombre: "Nicolas",
        apellido: "Nieto",
        email: "niconieto1506@gmail.com"
    }
    return new Promise((resolve, reject) => {
        var persona_string = "";
        setTimeout(function() {
            persona_string = JSON.stringify(persona);
            if (typeof persona_string != 'string' || persona_string == "") return reject('Error');
        
            return resolve(persona_string);
        }, 3000);
    });
}