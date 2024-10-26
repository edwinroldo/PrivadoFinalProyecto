//se importa la clase Pool del módulo 'pg' para manejar conexiones a PostgreSQL
const {Pool} = require('pg')

//variables de configuración de la base de datos, usando variables de entorno si están disponibles
const DB_USER = process.env.DB_USER || 'postgres';
const DB_PASSWORD = process.env.DB_PASSWORD || '1234';
const DB_HOST = process.env.DB_HOST || 'localhost';
const DB_PORT = process.env.DB_PORT || 5432;
const DB_DATABASE = process.env.DB_DATABASE || 'proyectofinal';
//nueva instancia de Pool para manejar múltiples conexiones a la base de datos
const pool = new Pool({
    user: DB_USER,
    password: DB_PASSWORD,
    host: DB_HOST,
    port: DB_PORT,
    database: DB_DATABASE,
    ssl:{
        rejectUnauthorized: false
    },
})

// Intenta conectar al pool de conexiones manejando errores
pool.connect((err) => {
    if (err) {
        console.error('Error connecting to the database', err);
    } else {
        console.log('Connected to the database');
    }
});

// Exporta el pool para que pueda ser utilizado en otros módulos
module.exports = pool;
