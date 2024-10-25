//requerimos componentes a utilizar
const express = require('express');
const morgan = require('morgan');
const cors = require('cors');

//se importa taskRouter
const taskRoutes = require('./routes/tasks.routes')


//se guarda en constante app
const app = express();
//comunica ambos servicios
app.use(cors());
//ver en consola las peticiones
app.use(morgan('dev'))
// servidor express lee peticiones json
app.use(express.json());


//Se utiliza taskRoutes
app.use(taskRoutes)

//Manejo de errores
app.use((err, req, res, next) => {
    return res.json({
        message: err.message
    })
})

//asignamos puerto al servidor que funcionara en puerto 4000

const PORT_SERV = process.env.PORT_SERV

app.listen(PORT_SERV, function() {
    console.log('Servidor en puerto ', PORT_SERV)
})