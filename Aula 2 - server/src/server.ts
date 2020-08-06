import express from 'express';

const app = express();

app.use(express.json());

app.post ('/', (request, response) => {
    console.log(request.body)
    const users = [
        {name: 'João', age: 26},
        {name: 'Matheus', age: 26},
    ]
    
    return response.json(users);
})

app.listen(3333);
