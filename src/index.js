// Requerimos componentes a utilizar
const express = require('express');
const morgan = require('morgan');
const cors = require('cors');

// Se importa taskRouter
const taskRoutes = require('./routes/tasks.routes');

// Se guarda en constante app
const app = express();
// Comunica ambos servicios
app.use(cors());
// Ver en consola las peticiones
app.use(morgan('dev'));
// Servidor express lee peticiones JSON
app.use(express.json());

// Se utiliza taskRoutes
app.use(taskRoutes);

// Manejo de errores
app.use((err, req, res, next) => {
    return res.json({
        message: err.message
    });
});

// Asignamos puerto al servidor que funcionará en el puerto 4000
const PORT_SERV = process.env.PORT_SERV || 4000;

app.listen(PORT_SERV, function() {
    console.log('Servidor en puerto', PORT_SERV);
});