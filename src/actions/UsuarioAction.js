import HttpClient from '../services/HttpClient';


export const insertUser = usuario => {
  return new Promise((resolve, eject) => {
    HttpClient.post('/Usuario/registrar', usuario).then(response => {
        resolve(response);
    });
  });
}

export const obtenerUsarioActual = () => {
  return new Promise((resolve, eject) => {
    HttpClient.get('/Usuario').then(response => {
      resolve(response);
    });
  });
}


export const actalizarUsarioActual = (usuario) => {
  return new Promise((resolve, eject) => {
    HttpClient.put('/Usuario', usuario).then(response => {
      resolve(response);
    });
  });
}

export const loginUsuario = usuario => {
  return new Promise((resolve, eject) => {
    HttpClient.post('/Usuario/login', usuario).then(response => {
      resolve(response);
    });
  });
}