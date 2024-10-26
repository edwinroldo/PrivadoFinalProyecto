// Importa la conexión a la base de datos desde el módulo db
const pool = require('../db')

// Función para obtener todas las tareas
const getAllTasks = async (req, res, next) => {
    try {
        const allTask = await pool.query('SELECT * FROM tarea'); //consulta para seleccionar todas las tareas
        res.json(allTask.rows); //devuelve en formato JSON
    } catch (error) {
        next(error); //llama a next si existe error
    }
}
// Función para obtener todas los usuarios
const getAllUsuarios  = async (req, res, next) => {
    try {
        const getAllUsuario = await pool.query('SELECT * FROM usuario'); //select a usuarios
        res.json(getAllUsuario.rows);
    } catch (error) {
        next(error);
    }
}
// Función para obtener una tarea específica por ID
const getTask = async (req, res, next) => {
    try {
        const {id} =  req.params // Función para obtener una tarea específica por ID
        const result = await pool.query('SELECT * FROM tarea WHERE id_tarea = $1' , [id])
    // Si no se encuentra la tarea, devuelve un error 404
    if (result.rows.length === 0) return res.status(404).json({  
        message: 'Tarea NO existe'
    })
    res.json(result.rows[0]);// Devuelve la tarea encontrada en formato JSON
    } catch (error) {
        next(error);
    }
    
}
// Función para obtener un usuario específico por nombre
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

const createTask = async (req, res, next) => {  // Función para crear una nueva tarea
    const {nombre_tarea, descripcion_tarea } = req.body  // Extrae los datos

    try {  // Realiza la consulta para insertar la nueva tarea y devolver la tarea creada
        const result = await pool.query (
            "INSERT INTO tarea (nombre_tarea, descripcion_tarea) VALUES ($1, $2) RETURNING *", 
            [nombre_tarea, descripcion_tarea] //realiza insert con los datos proporcionados
        );
    
        res.json(result.rows[0]); //devuelve en tarea creada en formato JSON
    } catch (error) {
        next(error);
    }
    
}

const deleteTask = async (req, res, next) => {  // Función para eliminar una tarea

    try {
        const { id_delete } = req.params  // Extrae el ID de la tarea a eliminar
            //consulta para eliminar tarea especifica
    const result = await pool.query('DELETE FROM tarea WHERE id_tarea = $1' , [id_delete])

    if (result.rowCount === 0) return res.status(404).json({
        message: "Tarea no existe"
        });
    return res.sendStatus(204); //estado 204 que la tarea fue exitosa
    } catch (error) {
        next(error);
    }

}

const updateTask = async(req, res, next) => {  // función para actualizar una tarea existente

    try {
        const { id_update } = req.params; //extrae ID de la tarea a modificar
    const { nombre_tarea, descripcion_tarea } = req.body;  //datos nuevos 

    const result = await pool.query(  //realiza update a la tarea con los datos nuevos
        'UPDATE tarea SET nombre_tarea = $1, descripcion_tarea = $2 WHERE id_tarea = $3 RETURNING *',
        [nombre_tarea, descripcion_tarea, id_update]
    );
    
    if (result.rows.length === 0)
        return res.status(404).json({
            message: "Tarea NO encontrada",       
        })

    return res.json(result.rows[0])  //tarea actualizada en formato JSON
    } catch (error) {
        next(error);
    }
}
   // exporta las funciones para que puedan ser utilizadas en otros módulos
module.exports = {
    getAllTasks,
    getTask,
    getAllUsuarios,
    createTask,
    deleteTask,
    updateTask,
    getUsuario
}