import axios from 'axios'
import cron from 'node-cron'
import { BASE_URL } from './config.js'

// Lista de endpoints
const endpoints = [
    '/OPERACION_GUZMAN/v2/dashguzman.php',
    '/OPERACION_GUZMAN/v2/doblessinreportarguzman.php',
    '/OPERACION_GUZMAN/v2/dashguzmandesv.php',
    '/OPERACION_GUZMAN/v2/dashguzmancajasdobles.php',
    '/OPERACION_GUZMAN/v2/dashguzmancajas.php'
];

async function ejecutarPeticiones() {
    console.log(BASE_URL);
    
    console.log(`\n[${new Date().toLocaleString()}] Iniciando ciclo de peticiones`);

    for (const endpoint of endpoints) {
        const url = `${BASE_URL}${endpoint}`;

        try {
            const response = await axios.get(url);
            console.log(`✔ ${endpoint} → OK`);
            // Si quieres ver la respuesta:
            // console.log(response.data);
        } catch (error) {
            console.error(`✖ ${endpoint} → ERROR:`, error.message);
        }
    }
}

// Ejecutar cada minuto
cron.schedule('* * * * *', ejecutarPeticiones);

// Ejecutar inmediatamente al iniciar
ejecutarPeticiones();
