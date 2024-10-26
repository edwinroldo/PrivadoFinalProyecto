import React from 'react'  //para utilizar componentes y JSX
//importa componentes MUI
import {Button, Divider, Grid2, Link, TextField, Typography} from '@mui/material'

function App() {
  
  //const URLMENU = process.env.REACT_APP_URLMENU || 'http://localhost:3000/';
  //console.log('URLMENU',URLMENU);

  const handleClick = () =>{  //funcion para manejar el botón de INGRESAR
    window.location.href = 'https://listatareas-o3yo.onrender.com/'; //dirige a MENU
  }
   
  return (

    <form  >
      <Grid2
        container
        columnSpacing={0} //espacio entre columnas
        xs={12}  //ocupa todo lo ancho disponible
        height='100vh'  //altura del viewport
        display='flex'  //usa flexbox
        justifyContent='center'  //centra horizontal
        alignItems='center'  //centra vertical
        backgroundColor='#3498db'  //color fondo
      >
          <Grid2
            container
            spacing='2'   //espacio entre lineas
            sx={{backgroundColor:'whitesmoke', border: '1px solid gray', padding:'20px'}}  //estilos
            flexDirection='column'  //direcciona elementos en columna
            display='flex'  
            >
              <Grid2 xs={12} sx={{mb: 2}} display='flex' justifyContent='center'>
                <Typography variant='h5'>Iniciar Sesión</Typography>
              </Grid2>
              <Grid2>
                <Divider sx={{mb: 2}}/>
              </Grid2>
                
            <Grid2 xs={12} sx={{mb: 2}}>
                <TextField 
                    name='usuario'   //componentes de espacio para ingresar usuario
                    fullWidth 
                    label='Usuario' 
                    type='text'
                     
                />
            </Grid2>

            <Grid2 xs={12} sx={{mb: 2}}>
                <TextField 
                    name='password'   //componentes de espacio para ingresar password
                    fullWidth 
                    label='Password' 
                    type='password'
                    
                />
            </Grid2>

            <Grid2 xs={12} sx={{mb: 2}} display='flex' justifyContent='end' >
                <Link variant='caption'  >
                    Recuperar Contraseña
                </Link>
            </Grid2>
                        {/*envia a MENU */}
            <Grid2 xs={12} display='flex' justifyContent='center'  > 
              <Button variant='contained' onClick={handleClick} >Ingresar</Button>
            </Grid2>

          </Grid2>

      </Grid2>
    </form>
  )
}



export default App