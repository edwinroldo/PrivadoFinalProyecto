import{useEffect, useState} from 'react'  //manejo de estado y efecto
import {Card, CardContent, Typography, Button} from '@mui/material'  //Material UI para interfaz usuario
import {useNavigate} from 'react-router-dom'  //navegación entre rutas


//Lista de tareas
export default function TaskList() {

  //const HOSTSERV = process.env.HOSTSERV || 'http://localhost:4000';

  const [tareas, setTask] = useState([]);   //estado para almacenar tareas
  const navigate = useNavigate();  //para manejar navegación

  //función async para cargar tareas desde el backend
  const cargarTareas = async() => {
    //const respuesta_lista_tareas = await fetch(`${HOSTSERV}/tasks`);
    const respuesta_lista_tareas = await fetch('https://backend-final-tny3.onrender.com/tasks');
    const datos_lista_tarea = await respuesta_lista_tareas.json();  //respuesta a formato JSON
    setTask(datos_lista_tarea); 
    console.log(datos_lista_tarea);
  };
      //funcion para eliminar datos con ID desde backend
  const eliminaDatos = async (id_tarea) => {
      try {
        await fetch(`https://backend-final-tny3.onrender.com/tasks/${id_tarea}`,{
          method:"DELETE",
        })
       //actualiza el estado eliminando la tarea de la lista     
      setTask(tareas.filter(tarea => tarea.id_tarea !== id_tarea));
      } catch (error) {
        console.log(error);
      }
          
  }
    //para cargar tareas al ejecutar cargar tareas
  useEffect(() => {
    cargarTareas();
  }, [cargarTareas]);
    //mapea las tareas y carga un card para cada una
  return (
    <>
      <h1>Lista de tareas</h1>
    {
      tareas.map(tarea => (
        <Card style={{
          marginBottom: "2rem",
          backgroundColor: '#1e272e'
          }}
          key={tarea.id_tarea}
        >
          <CardContent style={{
            display: "flex",
            justifyContent: "space-between",
            }}>
            <div style={{color:'whitesmoke'}}>
              <Typography>{tarea.nombre_tarea}</Typography> 
              <Typography>{tarea.descripcion_tarea}</Typography>
            </div>
            <div>
              <Button variant='contained' 
                      color='inherit' 
                      onClick={() => navigate(`/tasks/${tarea.id_tarea}/edit`)}>
                Editar
              </Button>
              <Button variant='contained' 
                      color='warning' 
                      onClick={() => eliminaDatos(tarea.id_tarea)}
                      style={{marginLeft: ".5rem"}}>
                Eliminar
              </Button>  
            </div>
            
          </CardContent>
        </Card>
      ) )
    }
    </>
  )
}
