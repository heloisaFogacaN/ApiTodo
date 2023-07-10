const {DataTypes, Model } = require('sequelize')
const connection = require('../../database/connection')

class Cards extends Model{

}

Cards.init({

    id_usuario: {
        type: DataTypes.STRING,
        allowNull: false,
        primaryKey:true,
        foreignKeys:true
    },

    permissions: {
        type: DataTypes.STRING,
        allowNull:false,
        primaryKey:true
    },
}, {
    sequelize: connection,
    modelName: "cards"
})
Cards.sync().then(() =>{
    console.log('cards sincronizado')
    })

module.exports = Cards;