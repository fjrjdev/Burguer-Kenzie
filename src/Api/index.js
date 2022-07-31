import axios from 'axios';

const Api = axios.create({
    baseURL: "https://hamburgueria-kenzie-json-serve.herokuapp.com/",
})

export default Api