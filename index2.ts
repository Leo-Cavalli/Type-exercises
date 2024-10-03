import axios from "axios";

const url = 'https://jsonplaceholder.typicode.com/todos/40';

interface Todo {
    id: number;
    title: string;
    completed: boolean;
};

axios.get(url).then(Response =>{
    const todo = Response.data as Todo;

    const ID = todo.id;
    const title = todo.title;
    const completed = todo.completed;

    console.log(`
        The todo with ID: ${ID}
        Has a title of: ${title}
        Is it finished? ${completed}
        `)
});