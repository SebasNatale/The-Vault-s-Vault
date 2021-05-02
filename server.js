const express = require('express');
const cors = require('cors');
const server = express();

server.use(cors());

server.listen(5000, () => {
    console.log('Servidor online!')
});


const testArray = {
    testKey: 'testValue'
};


server.get('/api', (req, res) => {
    console.log('/api accedido')
    res.json(testArray)
});

