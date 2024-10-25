const pool = require('../db')

const getAllTasks = async (req, res, next) => {
    try {
        const allTask = await pool.query('SELECT * FROM tarea');
        res.json(allTask.rows);
    } catch (error) {
        next(error);
    }
}

const getAllUsuarios  = async (req, res, next) => {
    try {
        const getAllUsuario = await pool.query('SELECT * FROM usuario');
        res.json(getAllUsuario.rows);
    } catch (error) {
        next(error);
    }
}

const getTask = async (req, res, next) => {
    try {
        const {id} =  req.params
        const result = await pool.query('SELECT * FROM tarea WHERE id_tarea = $1' , [id])
    
    if (result.rows.length === 0) return res.status(404).json({
        message: 'Tarea NO existe'
    })
    res.json(result.rows[0]);
    } catch (error) {
        next(error);
    }
    
}

const getUsuario = async (req, res, next) => {
    try {
        const {nombre_usuario} =  req.params
        const result = await pool.query('SELECT id_usuario FROM usuario WHERE nombre_usuario = $1' , [nombre_usuario])
    
    if (result.rows.length === 0) return res.status(404).json({
        message: 'Usuario NO Existe'
    })
    res.json(result.rows[0]);
    } catch (error) {
        next(error);
    }
    
}



const createTask = async (req, res, next) => {
    const {nombre_tarea, descripcion_tarea } = req.body

    try {
        const result = await pool.query (
            "INSERT INTO tarea (nombre_tarea, descripcion_tarea) VALUES ($1, $2) RETURNING *", 
            [nombre_tarea, descripcion_tarea]
        );
    
        res.json(result.rows[0]);
    } catch (error) {
        next(error);
    }
    
}

const deleteTask = async (req, res, next) => {

    try {
        const { id_delete } = req.params 

    const result = await pool.query('DELETE FROM tarea WHERE id_tarea = $1' , [id_delete])

    if (result.rowCount === 0) return res.status(404).json({
        message: "Tarea no existe"
        });
    return res.sendStatus(204);
    } catch (error) {
        next(error);
    }

}

const updateTask = async(req, res, next) => {

    try {
        const { id_update } = req.params;
    const { nombre_tarea, descripcion_tarea } = req.body;

    const result = await pool.query(
        'UPDATE tarea SET nombre_tarea = $1, descripcion_tarea = $2 WHERE id_tarea = $3 RETURNING *',
        [nombre_tarea, descripcion_tarea, id_update]
    );
    
    if (result.rows.length === 0)
        return res.status(404).json({
            message: "Tarea NO encontrada",       
        })

    return res.json(result.rows[0])
    } catch (error) {
        next(error);
    }
}

module.exports = {
    getAllTasks,
    getTask,
    getAllUsuarios,
    createTask,
    deleteTask,
    updateTask,
    getUsuario
}