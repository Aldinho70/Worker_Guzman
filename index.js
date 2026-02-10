import axios from 'axios'
import cron from 'node-cron'
import { BASE_URL } from './config.js'

// Lista de endpoints
const endpoints = [
    'v3/dashguzman.php',/** */
    'v3/dashguzmancajas.php',/** */
    'v3/dashguzmancajasdobles.php',/** */
    'v3/doblessinreportarguzman.php',/** */
    'v3/dashguzmandesv.php',
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
        } catch (error) {
            console.log(`✖ ${endpoint} → ERROR:`, error.message);
        }
    }
}

// Ejecutar cada minuto
cron.schedule('40 * * * * *', ejecutarPeticiones);

// Ejecutar inmediatamente al iniciar
ejecutarPeticiones();
