const path = require ('path');
const express = require('express');
const morgan = require('morgan');
const mongoose = require('mongoose');

const app= express();

let fechanacimiento = new Date('FechaNacimiento');
let ahora = new Date();
let agnios = ahora.getFullYear()-fechanacimiento.getFullYear();

//conectando a base de Datos
mongoose.connect('mongodb://localhost/crud-mongo')
.then(db => console.log('conectado db'))
.catch(err =>console.log(err));

// importando rutas
const indexRoutes = require('./routes/index');

//cofiguraciones
app.set('port', process.env.PORT || 8001);
app.set('views',path.join(__dirname,'views'));
app.set('view engine','ejs');

//middlewares-funcion se ejecuta antes de las rutas  procesar los datos antes de que lleguen
app.use(morgan('dev'));
app.use(express.urlencoded({extended: false}));

//rutas
app.use('/', indexRoutes);

//iniciando configuracion
app.listen(app.get('port'),()=>{
	console.log(`Server on port ${app.get('port')}`);
});

