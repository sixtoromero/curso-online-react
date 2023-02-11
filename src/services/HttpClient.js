import axios from 'axios';

axios.defaults.baseURL = 'http://localhost:52770/api';

axios.interceptors.request.use((config) => {    
    
    const token_seguridad = localStorage.getItem('token_seguridad');
    
    if (token_seguridad){ 
        config.headers.Authorization = 'Bearer ' + token_seguridad;
        return config;
    }

}, err => {
    return Promise.reject(err);
});


const requestGeneric = {
    get : (url) => axios.get(url),
    post: (url, body) => axios.post(url, body),
    put: (url, body) => axios.put(url, body),
    delete : (url) => axios.delete(url),
};

export default requestGeneric;
