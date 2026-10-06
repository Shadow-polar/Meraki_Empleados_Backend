// Importamos Mongoose
const mongoose = require('mongoose');

// Creamos el esquema para los clientes de MERAKI
const clienteSchema = new mongoose.Schema({

    nombre: {
        type: String,
        required: true
    },

    correo: {
        type: String,
        required: true
    },

    contraseña: {
        type: String,
        required: true
    },

    direccion: {
        type: String,
        required: true
    },

    celular: {
        type: String,
        required: true
    }

});

// Creamos y exportamos el modelo Cliente
const Cliente = mongoose.model('Cliente', clienteSchema);

module.exports = Cliente;