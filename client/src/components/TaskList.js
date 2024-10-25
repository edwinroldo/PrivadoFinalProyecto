import{useEffect, useState} from 'react'
import {Card, CardContent, Typography, Button} from '@mui/material'
import {useNavigate} from 'react-router-dom'

export default function TaskList() {

  const HOST_SERV = process.env.HOST_SERV || 'http://localhost:4000';

  const [tareas, setTask] = useState([])
  const navigate = useNavigate()

  const cargarTareas = async() => {
    const respuesta_lista_tareas = await fetch(`${HOST_SERV}/tasks`);
    const datos_lista_tarea = await respuesta_lista_tareas.json()
    setTask(datos_lista_tarea)
    console.log(datos_lista_tarea)
  }

  const eliminaDatos = async (id_tarea) => {
      try {
        await fetch(`${HOST_SERV}/tasks/${id_tarea}`,{
          method:"DELETE",
        })
       
      
      setTask(tareas.filter(tarea => tarea.id_tarea !== id_tarea));
      } catch (error) {
        console.log(error);
      }
          
  }

  useEffect(() => {
    cargarTareas()
  }, [])

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
