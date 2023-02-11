import React from 'react'
import { ThemeProvider, Button, TextField, Grid} from '@mui/material';
import theme from './theme/theme';
import RegistrarUsuario from './components/security/RegistrarUsuario';
import { Login } from './components/security/Login';
import { PerfilUsuario } from './components/security/PerfilUsuario';
//import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

export default function App() {
  return (
    <ThemeProvider theme={theme}>
      <Login />
    </ThemeProvider>
    // <Router>
    //   <ThemeProvider theme={theme}>
    //     <Grid>
    //       <Switch>
    //         <Route exact path="/auth/login" component={Login} />
    //         <Route exact path="/auth/registrar" component={RegistrarUsuario} />
    //         <Route exact path="/auth/perfil" component={PerfilUsuario} />
    //       </Switch>
    //     </Grid>
    //   </ThemeProvider>
    // </Router>    
  );
}