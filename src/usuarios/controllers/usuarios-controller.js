const express = require("express")
const routes = express.Router();
const Usuario = require('../models/usuario')

function createRoute(){
    routes.post('/usuarios', (req, res)=>{
        console.log(req.body);
        Usuario.create(req.body)
        res.json("Usuário criado!");
    });
}


function findAllRoute(){
    routes.get('/usuarios', async (req, res) => {
        res.json(await Usuario.findAll());
    });
}

function findByIdRoute(){
    routes.get('/usuarios/:id', async (req, res) => {
        const usuario = await Usuario.findOne({ where: { id: req.params.id } });
            if (usuario === null) {
            console.log('Não encontrado!');
        } else {
            res.json(usuario.id)
        console.log(usuario instanceof Usuario); 
    console.log(usuario.id);
}
    });
}

function upDateRoute(){
    routes.put('/usuarios', async (req, res) => {
        console.log('UPDATE', req.params)
        const usuario = await Usuario.update( req.body, { where: { id: req.body.id } })
        if (usuario === null) {
            console.log('Não encontrado!');
        } else {
            console.log(usuario.name)
           res.json(req.body)
        }
    });
}

function removeRoute(){
    routes.delete('/usuarios/:id', async(req, res) => {
        console.log(req.params)
        const usuario = await Usuario.destroy({ where: { id: req.params.id } });
        res.json(usuario);
    });
}

function registerRoutes(){
    createRoute()
    removeRoute()
    findByIdRoute()
    upDateRoute()
    findAllRoute()
    return routes
}

module.exports = registerRoutes;
