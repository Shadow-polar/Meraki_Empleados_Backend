// Importamos Express
const express = require('express');

// Importamos CORS
const cors = require('cors');

// Importamos nuestra función de conexión a MongoDB
const conectarDB = require('./database');

// Importamos las rutas de clientes
const clientesRoutes = require('./routes/clientes');

// Creamos nuestra aplicación de Express
const app = express();

// Definimos el puerto donde funcionará nuestro servidor
const port = 3000;

// Permite recibir información en formato JSON
app.use(express.json());

// Permitimos las solicitudes desde Angular
app.use(cors({origin: '*'}));

// Utilizamos las rutas de clientes
app.use('/clientes', clientesRoutes);

// Conectamos nuestro proyecto con MongoDB
conectarDB();

// Ruta principal de prueba
app.get('/', (req, res) => {
    res.send('Servidor MERAKI funcionando correctamente');
});

// Iniciamos el servidor
app.listen(port, () => {
    console.log(`Servidor MERAKI ejecutándose en http://localhost:${port}`);
});