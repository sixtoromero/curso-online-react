import { IconButton, Toolbar, Typography } from '@mui/material'
import React from 'react'

const BarSesion = () => {
  return (
    <Toolbar>
        <IconButton color="inherit">
            <i className='material-icons'>menu</i>
        </IconButton>

        <Typography variant='h6'>Cursos Online</Typography>        

    </Toolbar>
  )
}

export default BarSesion
