//rutas o endpoints o url que front puede visitar
// se requiere expres y la opcion router
const { Router } = require('express');
const { getAllTasks, getTask, createTask, deleteTask, updateTask, getAllUsuarios, getUsuario } = require('../controllers/tasks.controller')

const router = Router();
//Envio lo que quiero haga en la url
router.get('/tasks', getAllTasks)

router.get('/tasks/:id', getTask)

router.post('/tasks', createTask)

router.delete('/tasks/:id_delete', deleteTask)

router.put('/tasks/:id_update', updateTask)

router.get('/usuario', getAllUsuarios)

router.get('/usuario/:nombre_usuario', getUsuario)




//
module.exports = router;