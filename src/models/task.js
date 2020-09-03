const mongoose = require ('mongoose');
const Schema = mongoose.Schema;

const TaskSchema = new Schema({

	Nombre: String,
	Apellido: String,
	Email: String,
	Telefono: String, 
	FechaNacimiento: String,
	Edad: String

});

module.exports = mongoose.model('tasks',TaskSchema);