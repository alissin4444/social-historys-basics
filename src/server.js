const express = require('express');
const routes = require('./routes');
const app = express();

require('./database');

app.use(express.json());
app.use(routes);

app.listen(4444);


/*

    usuarios
    - id
    - nome
    - sobre
    - email
    - senha

    historias
    - id
    - id_usuario
    - titulo
    - historia

    likes
    - id
    - id_usuario
    - id_historia

    comentarios
    - id
    - comentario
    - id_usuario
    - id_historia

*/