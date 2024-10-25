import { AppBar, Box, Button, Container, Toolbar, Typography } from '@mui/material'
import {Link, useNavigate} from 'react-router-dom'

export default function Navbar() {

    const URL_LOGIN = process.env.URL_LOGIN || 'http://localhost:3001/'

    const navigate = useNavigate()

    const handleClick = () => {
        window.location.href = URL_LOGIN;
      };

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
