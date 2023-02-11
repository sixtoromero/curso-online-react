import React, { useState } from 'react'
import { Grid, TextField, Typography, Container, Button } from '@mui/material';
import Style from '../tools/Style';
import { insertUser } from '../../actions/UsuarioAction';

const RegistrarUsuario = () => {

    const [usuario, seetUsuario] = useState({
        NombreCompleto : '',
        Email : '',
        Password : '',
        ConfirmarPassword : '',
        Username : ''
    });

    const ingresarValoresMemoria = e => {
        const {name, value} = e.target;
        seetUsuario(anterior =>({
           ...anterior, 
           [name] : value
        }));
    }

    const registrarUsuarioBoton = e => {
        e.preventDefault();
        insertUser(usuario).then(response => {            
            localStorage.setItem("token_seguridad", response.data.token);
        });
        //insertUser
        

    }

    return (       
        <Container component="main" maxWidth="md" justify="center">
            <div style={Style.paper}>
                <Typography component="h1" variant='h5'>
                    Registro de Usuario
                </Typography>
                <form style={Style.form}>
                    <Grid container spacing={2}>
                        <Grid item xs={12} md={12}>
                            <TextField name="NombreCompleto" onChange={ingresarValoresMemoria} value={usuario.NombreCompleto} variant="outlined" fullWidth label="Ingrese nombres y apellidos" />
                        </Grid>                        
                        <Grid item xs={12} md={6}>
                            <TextField name="Email" onChange={ingresarValoresMemoria} value={usuario.Email} variant='outlined' fullWidth label="Ingrese su email" />
                        </Grid>
                        <Grid item xs={12} md={6}>
                            <TextField name="Username" onChange={ingresarValoresMemoria} value={usuario.Username} variant='outlined' fullWidth label="Ingrese su username" />
                        </Grid>
                        <Grid item xs={12} md={6}>
                            <TextField name="Password" onChange={ingresarValoresMemoria} value={usuario.Password} variant='outlined' type="password" fullWidth label="Ingrese su password" />
                        </Grid>
                        <Grid item xs={12} md={6}>
                            <TextField name="ConfirmarPassword" onChange={ingresarValoresMemoria} value={usuario.ConfirmarPassword} variant='outlined' type="password" fullWidth label="Confirmar password" />
                        </Grid>
                    </Grid>                    
                    <Grid container justifyContent="center">
                        <Grid item xs={12} md={6}>
                            <Button 
                                type="submit" 
                                onClick={registrarUsuarioBoton}
                                fullWidth 
                                variant="contained" 
                                color="primary" 
                                size="large" 
                                style={Style.submit}>
                                Enviar
                            </Button>
                        </Grid>
                    </Grid>
                </form>
            </div>
        </Container>
    );
}

export default RegistrarUsuario;