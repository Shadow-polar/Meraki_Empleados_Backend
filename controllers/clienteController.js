// Importamos el modelo Cliente
const Cliente = require('../models/Cliente');

// Obtener todos los clientes
const obtenerClientes = async (req, res) => {

    try {

        const clientes = await Cliente.find();

        res.json(clientes);

    } catch (error) {

        res.status(500).json({
            mensaje: 'Error al obtener los clientes',
            error: error.message
        });

    }

};
// Crear un nuevo cliente
const crearCliente = async (req, res) => {

    try {

        const nuevoCliente = new Cliente({
            nombre: req.body.nombre,
            correo: req.body.correo,
            contraseña: req.body.contraseña,
            direccion: req.body.direccion,
            celular: req.body.celular
        });

        const clienteGuardado = await nuevoCliente.save();

        res.status(201).json(clienteGuardado);

    } catch (error) {

        res.status(500).json({
            mensaje: 'Error al crear el cliente',
            error: error.message
        });

    }

};
// Obtener un cliente por su ID
const obtenerCliente = async (req, res) => {

    try {

        const cliente = await Cliente.findById(req.params.id);

        if (!cliente) {
            return res.status(404).json({
                mensaje: 'Cliente no encontrado'
            });
        }

        res.json(cliente);

    } catch (error) {

        res.status(500).json({
            mensaje: 'Error al obtener el cliente',
            error: error.message
        });

    }

};
// Actualizar un cliente
const actualizarCliente = async (req, res) => {

    try {

        const clienteActualizado = await Cliente.findByIdAndUpdate(
            req.params.id,
            req.body,
            {
                new: true,
                runValidators: true
            }
        );

        if (!clienteActualizado) {
            return res.status(404).json({
                mensaje: 'Cliente no encontrado'
            });
        }

        res.json(clienteActualizado);

    } catch (error) {

        res.status(500).json({
            mensaje: 'Error al actualizar el cliente',
            error: error.message
        });

    }

};
// Eliminar un cliente
const eliminarCliente = async (req, res) => {

    try {

        const clienteEliminado = await Cliente.findByIdAndDelete(req.params.id);

        if (!clienteEliminado) {
            return res.status(404).json({
                mensaje: 'Cliente no encontrado'
            });
        }

        res.json({
            mensaje: 'Cliente eliminado correctamente',
            cliente: clienteEliminado
        });

    } catch (error) {

        res.status(500).json({
            mensaje: 'Error al eliminar el cliente',
            error: error.message
        });

    }

};


// Exportamos las funciones
module.exports = {
    obtenerClientes,
    crearCliente,
    obtenerCliente,
    actualizarCliente,
    eliminarCliente
};