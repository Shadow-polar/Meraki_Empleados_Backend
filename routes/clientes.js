// Importamos Express
const express = require('express');

// Creamos un router
const router = express.Router();

// Importamos las funciones del controlador
const {
    obtenerClientes,
    crearCliente,
    obtenerCliente,
    actualizarCliente,
    eliminarCliente
} = require('../controllers/clienteController');

// Ruta para obtener todos los clientes
router.get('/', obtenerClientes);

// Ruta para crear un nuevo cliente
router.post('/', crearCliente);

// Ruta para obtener un cliente por su ID
router.get('/:id', obtenerCliente);

// Ruta para actualizar un cliente
router.patch('/:id', actualizarCliente);

// Ruta para eliminar un cliente
router.delete('/:id', eliminarCliente);

// Exportamos el router
module.exports = router;