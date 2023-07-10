const express = require("express");
const Cards = require("../models/cards");
const routes = express.Router();

function findAllRoute(){
routes.get('/cards', async(req, res) => {
 res.json(await Cards.findAll());
} );
}

function createRoute(){
    routes.post('/cards', async (req, res) => {
        console.log(req.body)
        await Cards.create(req.body)
     res.json([]);
    } );
    }

    function findByIdRoute(){
        routes.get('/cards/:id_usuario', async (req, res) => {
            console.log(req.params)
        
            const cards = await Cards.findOne({where: 
                {id_usuario: req.params.id_usuario}})

            if (Cards === null) {
                console.log('Not found!');

              } else {
                console.log(cards instanceof Cards); 
                console.log(cards.id_usuario); 
                res.json(cards)
              }
              })
        } 
        

        function updateRoute() {
            routes.put('/cards/:id_usuario', async (req, res) => {
                const cards = await Cards.update(req.body,{
                    where:{
                        id_usuario:req.body.id_usuario
        
                    }
                })
                res.json(req.body)
            });
          }
          

            function removeRoute(){
                routes.delete('/cards/:id_usuario', async(req, res) => {
                    console.log(req.params)

                 const cards = await Cards.destroy({ where: 
                    {id_usuario: req.params.id_usuario} });
                    console.log(cards.id_usuario); 
                    
                    res.json(cards);
                } );
                }

function registraCardsPermitionsRotas(){
    createRoute();
    findAllRoute();
    findByIdRoute();
    updateRoute();
    removeRoute();
    
    return routes;
}

module.exports = registraCardsPermitionsRotas