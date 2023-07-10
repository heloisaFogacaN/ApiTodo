const express = require("express");
const Properties = require("../models/properties");
const routes = express.Router();

function findAllRoute(){
routes.get('/properties', async(req, res) => {
 res.json(await Properties.findAll());
} );
}

function createRoute(){
    routes.post('/properties', async (req, res) => {
        console.log(req.body)
        await Properties.create(req.body)
     res.json([]);
    } );
    }

    function findByIdRoute(){
        routes.get('/properties/:id_usuario', async (req, res) => {
            console.log(req.params)
        
            const properties = await Properties.findOne({where: 
                {id_usuario: req.params.id_usuario}})

            if (Properties === null) {
                console.log('Not found!');

              } else {
                console.log(properties instanceof Properties); 
                console.log(properties.id_usuario); 
                res.json(properties)
              }
              })
        } 
        

        function updateRoute() {
            routes.put('/properties/:id_usuario', async (req, res) => {
                const properties = await Properties.update(req.body,{
                    where:{
                        id_usuario:req.body.id_usuario
        
                    }
                })
                res.json(req.body)
            });
          }
          

            function removeRoute(){
                routes.delete('/properties/:id_usuario', async(req, res) => {
                    console.log(req.params)

                 const properties = await Properties.destroy({ where: 
                    {id_usuario: req.params.id_usuario} });
                    console.log(properties.id_usuario); 
                    
                    res.json(properties);
                } );
                }

function registraPropriedadesRotas(){
    createRoute();
    findAllRoute();
    findByIdRoute();
    updateRoute();
    removeRoute();
    
    return routes;
}

module.exports = registraPropriedadesRotas