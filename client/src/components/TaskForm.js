import {Card, CardContent, Grid, TextField, Typography, Button, CircularProgress} from '@mui/material'; // MaterialUI
import {useState, useEffect} from 'react'  //estado y efecto
import {useNavigate, useParams} from 'react-router-dom'  //navegación y parametros de rutas
//import HOSTSERV from './TaskList';

//componente para editar y crear tareas
export default function TaskForm() {
  const[tarea, setTask] = useState({
        nombre_tarea: "",
        descripcion_tarea: "",
  });

  //estado para botón cargando
  const[loading, setLoading] = useState(false);
  const[editing, setEditing] = useState(false);//estado para saber si está editando
  //navegación y obtención de URL parametros
  const navigate = useNavigate();
  const params = useParams();

  const handleSubmit = async (e) => {  //envio de formulario
      e.preventDefault(); 

      //cambia estado loading a true
      setLoading(true)

      if (editing){//verifica si esta editando
        //petición PUT para actualizar tarea
        await fetch(`https://backend-final-tny3.onrender.com/tasks/${params.id_tarea}`, {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(tarea), //convierte a formato JSON
        });
        
      } else{
        //enviar api hasta back para guardar datos y respuesta guarda esa información
      await fetch(`https://backend-final-tny3.onrender.com/tasks`, {
        //el tipo de metodo a utilizar
        method: 'POST',
        //a travez de body convierto de JSON  a string
        body: JSON.stringify(tarea),
        headers: { "Content-Type": "application/json"},
    });
      }
            
      //capturo los datos y confierto a formato JSON para ver en consola
      //const datos = await respuesta.json()
      //cambio de estado a false de loading
      setLoading(false) //loading cambia a false
      navigate('/')  //dirige a lista de tareas

  };

  const handleChange = e =>  //maneja cambio de campos en formulario
    setTask({...tarea, [e.target.name]: e.target.value});  //actualiza estado de la tarea
      //carga tarea especifica para editar con su ID
    const cargarTarea = async (id) => {
      const respuesta = await fetch(`https://backend-final-tny3.onrender.com/tasks/${id}`)
      const datos = await respuesta.json()
        //establece estado con datos obtenidos
      setTask({nombre_tarea: datos.nombre_tarea, descripcion_tarea: datos.descripcion_tarea})
      setEditing(true)  //cambia estado de edicion
    }

    useEffect(() =>{ //carga tarea si pasa ID
      if(params.id_tarea){
        cargarTarea(params.id_tarea);
      }
    }, [params.id_tarea])  //se ejecuta cuando cambia el ID de la tarea
//componentes para editar y crear
  return (
      <Grid container direction="column" alignItems= "center" justifyContent= "center">
          <Grid item xs={3}>
              <Card sx={{mt:5}} style={{
                  backgroundColor: '#1e272e',
                  padding: "1rem"
              }}>
                <Typography variant='5' textAlign='center' color='white'>
                  {editing ? "Editar Tarea" : "Crear Tarea"}
                </Typography>
                <CardContent>
                    <form onSubmit={handleSubmit}>
                      <TextField 
                          variant='filled'
                          label ='Nombre de Tarea'
                          sx={{display: 'block',
                                margin: '.5rem 0'
                          }}
                          name='nombre_tarea'
                          value={tarea.nombre_tarea}
                          onChange={handleChange}
                          inputProps={{style:{color:"white"}}}
                          InputLabelProps={{style: {color:"white"}}}

                      />
                      <TextField
                          variant='filled'
                          label= 'Descripción de tarea'
                          multiline
                          rows={5}
                          sx={{display: 'block',
                                margin: '.5rem 0'}}
                                name='descripcion_tarea'
                                value={tarea.descripcion_tarea}
                                onChange={handleChange}
                                inputProps={{style:{color:"white"}}}
                                InputLabelProps={{style: {color:"white"}}}
                      />
                      <Button variant='contained' color= 'primary'  type= 'submit' disabled={
                        !tarea.nombre_tarea || !tarea.descripcion_tarea   //deshabilita boton si no hay datos
                        }>
                            {loading ? (
                              <CircularProgress color='inherit' size={24} />
                            ) : ("Guardar")}
                      </Button>
                    </form>
                </CardContent>
              </Card>
          </Grid>
      </Grid>

  )
}
