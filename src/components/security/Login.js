import {
  Avatar,
  Button,
  Container,
  TextField,
  Typography,
} from "@mui/material";
import React, { useState } from "react";
import style from "../tools/Style";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import { loginUsuario } from "../../actions/UsuarioAction";

export const Login = () => {
  const [usuario, setUsuario] = useState({
    Email: "",
    Password: "",
  });

  const ingresarValoresMemoria = (e) => {
    const { name, value } = e.target;
    setUsuario((anterior) => ({
      ...anterior,
      [name]: value,
    }));
  };

  const loginUsuarioBoton = (e) => {
    e.preventDefault();
    loginUsuario(usuario).then((resp) => {
      console.log(resp);
      localStorage.setItem("token_seguridad", resp.data.token);
    });
  };

  return (
    <Container maxWidth="xs">
      <div style={style.paper}>
        <Avatar style={style.avatar}>
          <LockOutlinedIcon style={style.icon} />
        </Avatar>
        <Typography component="h1" variant="h5">
          Login de Usuario
        </Typography>
        <form style={style.form}>
          <TextField
            name="Email"
            value={usuario.Email}
            onChange={ingresarValoresMemoria}
            variant="outlined"
            label="Ingrese username"            
            fullWidth
            margin="normal"
          />
          <TextField
            name="Password"
            value={usuario.Password}
            onChange={ingresarValoresMemoria}
            variant="outlined"
            label="Password"
            type="password"            
            fullWidth
            margin="normal"
          />
          <Button
            type="submit"
            onClick={loginUsuarioBoton}
            fullWidth
            variant="contained"
            color="primary"
            style={style.submit}
          >
            Enviar
          </Button>
        </form>
      </div>
    </Container>
  );
};
