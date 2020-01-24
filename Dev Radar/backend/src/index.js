const express = require('express');
const mongoose = require('mongoose');
const http = require('http');
const cors = require('cors');

const { setupWebsocket } = require('./websocket')
const routes = require('./routes');

const app = express();
const server = http.Server(app);

setupWebsocket(server);

mongoose.connect('mongodb+srv://alison:alison@cluster0-btcu0.mongodb.net/firstbd?retryWrites=true&w=majority', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
});

app.use(cors());
app.use(express.json());
app.use(routes);

//query Params: request.query (Filtros, ordenação, paginação ...)
// Route Params : request.params (IDENTIFICAR UM RECURSO NA ALTERAÇÃO OU REMOÇÃO)
// BODY: request.body (dados para criação ou alteação de um registro)

//MongoDB (não-relacional)


server.listen(3333);