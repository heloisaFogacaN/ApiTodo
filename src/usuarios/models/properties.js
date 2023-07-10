const {DataTypes, Model} = require('sequelize');
const connection = require('../../database/connection')

class Properties  extends Model{}
Properties.init({
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
},{

    sequelize: connection,
    modelName: "properties"
})

Properties .sync()
.then(()=> {
    console.log('Properties sincornizadas');
    console.log(Usuario)
})
.catch((e) => {
    console.log('Properties não sincornizadas', e);
})

module.exports= Properties ;