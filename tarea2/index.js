const express = require('express');

const app = express();
const userRouters = require('./routes/userRoutes');
const port = 3000;

app.use(express.json());

app.use('/users',userRouters);

app.listen(port, () => {
    console.log('Servidor ejecutando');
    
})
