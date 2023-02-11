import { Container, Grid, TextField, Typography, Button } from '@mui/material';
import React, { useState, useEffect } from 'react'
import { actalizarUsarioActual, obtenerUsarioActual } from '../../actions/UsuarioAction';
import style from '../tools/Style';


export const PerfilUsuario = () => {

    const [usuario, setUsuarios] = useState({
        nombreCompleto : '',
        email : '',
        username: '',
        password : '',        
        confirmarPassword : '',
    });

    const ingresarValoresMemoria = e => {
        const {name, value} = e.target;
        setUsuarios(anterior => ({
            ...anterior,
            [name] : value
        }));
    }

    useEffect(() => {
        obtenerUsarioActual().then(response =>{            
            console.log(response);
            setUsuarios(response.data);
        });
    }, []);

    
    const guardarUsario = e => {
        e.preventDefault();
        actalizarUsarioActual(usuario).then(resp => {
            localStorage.setItem('token_seguridad', resp.data.token);
        });
    }

  return (
    <Container component="main" maxWidth="md">
        <div style={style.paper}>
            <Typography component="h1" variant="h5">
                Perfil de Usuario
            </Typography>
        </div>
        <form style={style.form}>
            <Grid container spacing={2}>
                <Grid item xs={12} md={12}>
                    <TextField 
                        name="nombreCompleto" 
                        onChange={ingresarValoresMemoria} 
                        value={usuario.nombreCompleto} 
                        variant='outlined' 
                        fullWidth 
                        label="Ingrese nombres y apellidos" />
                </Grid>
                <Grid item xs={12} md={6}>
                    <TextField 
                        name="username"  
                        onChange={ingresarValoresMemoria} 
                        value={usuario.username} 
                        variant='outlined' 
                        fullWidth 
                        label="Ingrese nombre de usuario" />
                </Grid>
                <Grid item xs={12} md={6}>
                    <TextField 
                        name="email"  
                        onChange={ingresarValoresMemoria} 
                        value={usuario.email} 
                        variant='outlined' 
                        fullWidth 
                        label="Ingrese email" type="email" />
                </Grid>                                             
                <Grid item xs={12} md={6}>
                    <TextField 
                        name="password"  
                        onChange={ingresarValoresMemoria} 
                        value={usuario.password  || ""} 
                        variant='outlined' 
                        fullWidth 
                        label="Ingrese password" 
                        type="password" />
                </Grid>
                <Grid item xs={12} md={6}>
                    <TextField 
                        name="confirmarPassword" 
                        onChange={ingresarValoresMemoria} 
                        value={usuario.confirmarPassword || ""} 
                        variant='outlined' 
                        fullWidth 
                        label="Confirme password" 
                        type="password" />
                </Grid>
            </Grid>
            <Grid container justifyContent="center" >
                <Grid item xs={12} md={6}>
                    <Button type="submit" onClick={guardarUsario} fullWidth variant="contained" size="large" color="primary" style={style.submit}>
                        Guardar Datos
                    </Button>
                </Grid>
            </Grid>
        </form>
    </Container>
  )
}
