const express = require('express');
const cors = require('cors');
const app = express(); 
app.use(express.json());
app.use(cors());


const router = require('./routes');
app.use(router);

require('./database/connection');


app.get('/hello/world', (req, res) =>{
    res.json({message : 'Hello word!'});
});

app.listen(4300, () => {
    console.log('Servidor rodando rodando na porta 4300');
});
require('./usuarios/models/usuario')
require('./usuarios/models/properties')
require('./usuarios/models/cardsPermitions')