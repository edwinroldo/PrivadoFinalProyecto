import React from 'react'
import {Button, Divider, Grid2, Link, TextField, Typography} from '@mui/material'



 

function App() {
  
  const URL_MENU = process.env.URL_MENU || 'http://localhost:3000/'

  const handleClick = () =>{
    window.location.href = URL_MENU;
  }
      

  return (

    <form  >
      <Grid2
        container
        columnSpacing={0}
        xs={12}
        height='100vh'
        display='flex'
        justifyContent='center'
        alignItems='center'
        backgroundColor='#3498db'
      >
          <Grid2
            container
            spacing='2'
            sx={{backgroundColor:'whitesmoke', border: '1px solid gray', padding:'20px'}}
            flexDirection='column'
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
                    name='usuario' 
                    fullWidth 
                    label='Usuario' 
                    type='usuario'
                     
                />
            </Grid2>

            <Grid2 xs={12} sx={{mb: 2}}>
                <TextField 
                    name='password' 
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

            <Grid2 xs={12} display='flex' justifyContent='center'  >
              <Button variant='contained' onClick={handleClick} >Ingresar</Button>
            </Grid2>

          </Grid2>

      </Grid2>
    </form>
  )
}



export default App