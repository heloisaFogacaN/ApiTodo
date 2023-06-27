const express = require("express")
const routes = express.Router();
const Usuario = require('../models/usuario')

function createRoute(){
    routes.post('/usuarios/:meuPArametro', async (req, res) => {
        console.log('CREATE:', req.body)
        Usuario.create(req.body)
        res.json();
    });
}

function findAllRoute(){
    routes.get('/usuarios/:meuPArametro', (req, res) => {
        res.json([]);
    });
}

function findById(){
    routes.get('/usuarios/:meuPArametro', (req, res) => {
        console.log(req.params)
        res.json();
    });
}

function upDateRoute(){
    routes.put('/usuarios/:meuPArametro', (req, res) => {
        console.log('UPDATE', req.params)
    });
}

function removeAllRoute(){
    routes.delete('/usuarios/:meuPArametro', (req, res) => {
        console.log(req.params)
        res.json();
    });
}

function registerRoutes(){
    createRoute()
    findAllRoute()
    findById()
    upDateRoute()
    removeAllRoute()
    return routes
}

module.exports = registerRoutes;
