import { AppBar, Box, Button, Container, Toolbar, Typography } from '@mui/material'  //Material UI
import {Link, useNavigate} from 'react-router-dom'  // componente para nevegación

export default function Navbar() {  //navegación prinicpal

    //const URLLOGIN = process.env.URLLOGIN || 'http://localhost:3001/'

    const navigate = useNavigate() //navegación

    const handleClick = () => {  //boton salir envia a Login
        window.location.href = 'https://loginproyecto.onrender.com';
      };
// panel de menu o navegación en principal a lista de proyectos, lista de tareas y tareas nuevas + boton salir
  return (
    <Box sx={{ flexGrow: 1 }}>
        <AppBar position='static' color='transparent'>
            <Container>
                <Toolbar>
                    <Typography variant='h5' sx={{ flexGrow: 1 }}>
                        <Link to="/" style={{ textDecoration: "none", color:"#eee"}} >Control de Proyectos</Link>
                    </Typography>
                    <Button variant='contained' color='secondary' onClick={ () => navigate("/tasks/new")}>
                        Nuevo Poyecto
                    </Button>
                    <Button variant='contained' color='primary' onClick={handleClick} >
                        Salir 
                    </Button>
                </Toolbar>
            </Container>
        </AppBar>
    </Box>
  )
}
