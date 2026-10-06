// Importamos Mongoose
const mongoose = require('mongoose');
const dotenv = require('dotenv');

// Cargamos las variables de entorno
dotenv.config();

// Función para conectar nuestro proyecto con MongoDB
const conectarDB = async () => {
    try {
        await mongoose.connect(process.env.MONGO_URI);

        console.log('MongoDB conectado correctamente');
    } catch (error) {
        console.error('Error al conectar con MongoDB:', error.message);
        process.exit(1);
    }
};

// Exportamos la función para poder utilizarla desde index.js
module.exports = conectarDB;