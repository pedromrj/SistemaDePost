const PORT = 3333;
const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const routes = require('./routes');
const server = express();

const mongoDB = "mongodb+srv://root:root@cluster0-kvf2p.mongodb.net/SisPost?retryWrites=true&w=majority";
mongoose.connect(mongoDB , { useNewUrlParser: true});

mongoose.connection.on('connected', () => {
    console.log('Conexão estabelecidade com sucesso!!')
});

mongoose.connection.on('error', (err) => {
    console.log(`Ocorreu um error: ${err}` );
});

mongoose.connection.on('disconnected', () => {
    console.log('Conexão finalizada');
});

server.use(bodyParser.json());
server.use(routes);
server.listen(PORT);