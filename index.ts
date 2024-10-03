import axios from "axios";

const url = 'https://jsonplaceholder.typicode.com/todos/40';

axios.get(url).then(Response =>{
    console.log(Response.data)
});