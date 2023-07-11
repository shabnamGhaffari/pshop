import axios from 'axios';

const baseUrl = "http://localhost:8000/api";


export const shopAxios=axios.create({
    baseURL:baseUrl,
    headers:{
        "Content-Type":"application/json"
    }
})