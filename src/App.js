import React from 'react'

//import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

//import { ThemeProvider, Button, TextField, Grid} from '@mui/material';
import { Grid, ThemeProvider} from '@mui/material';
import theme from './theme/theme';
import RegistrarUsuario from './components/security/RegistrarUsuario';
import { Login } from './components/security/Login';
import { PerfilUsuario } from './components/security/PerfilUsuario';
import AppNavbar from './components/navegation/AppNavbar';

export default function App() {
  return (
    <BrowserRouter>
      <ThemeProvider theme={theme}>
        <AppNavbar />
        <Grid container>
          <Routes>
            <Route path="/" element={<Login />} />
            <Route path="auth/login" element={<Login />} />
            <Route path="/auth/registrar" element={<RegistrarUsuario />} />
            <Route path="/auth/perfil" element={<PerfilUsuario />} />
          </Routes>
        </Grid>        
      </ThemeProvider>
    </BrowserRouter>

  );
}