const sequelize = require('sequelize')
const database = require('../database/config')


const time = database.define('horários',{
    id:{
        type: sequelize.STRING,
        primaryKey: true,
        
    },
    name:{
        type: sequelize.STRING,
        allowNull:false
    },
    turno:{
        type: sequelize.STRING,
        allowNull:false
    },
    horario_inicial:{
        type: sequelize.TIME,
        allowNull:false
    },
    horario_final:{
        type: sequelize.TIME,
        allowNull:false
    },
    visibilidade:{
        type: sequelize.INTEGER,
        allowNull:false,
        defaultValue:1,
    },
});

//time.belongsTo(UserMat,{foreignKey: 'matricula', allowNull: false})
time.sync({force: false})




module.exports = time