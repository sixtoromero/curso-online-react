import { AppBar } from '@mui/material'
import React from 'react'
import BarSesion from './bar/BarSesion'

const AppNavbar = () => {
  return (
    <AppBar position='static'>
      <BarSesion />
    </AppBar>
  )
}

export default AppNavbar
