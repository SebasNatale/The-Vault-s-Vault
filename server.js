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
    counter()
    res.json(testArray)
});

// -----------------

let counterVar = 0;

function counter() {
    counterVar = counterVar + 1
    console.log('/api accedido. Requests hasta ahora: ', counterVar)
};