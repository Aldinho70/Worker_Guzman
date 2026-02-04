const axios = require('axios');

const URL = 'http://localhost:8080/repos//OPERACION_GUZMAN/v2/dashguzman.php';

const ejecutarPeticion = async () => {
    console.log(`[${new Date().toLocaleString()}] Ejecutando petición...`);

    try {
        const response = await axios.get(URL);
        console.log('Respuesta:', response.data);
    } catch (error) {
        console.error('Error en la petición:', error.message);
    }
};

// Cada 60 segundos
setInterval(ejecutarPeticion, 60 * 1000);

// Ejecuta inmediatamente al iniciar
ejecutarPeticion();
