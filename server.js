const MongoClient= require('mongodb').MongoClient
const shh = require('./shh');
const express = require('express');
const cors = require('cors');
const server = express();

const mongoDB = new MongoClient(shh, { useNewUrlParser: true, useUnifiedTopology: true });

mongoDB.connect((err, client) => {
    if (err) return console.error(err)
    console.log('DB conectada!')    
})

server.use(cors());

server.listen(5000, () => {
    console.log('Servidor online!')
});

const testArray = {
    localTestKey: 'localTestValue'
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