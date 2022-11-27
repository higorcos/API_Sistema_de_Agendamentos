const sequelize = require('sequelize')
const database = require('../database/config')

const lab = database.define('laboratórios',{
    id:{
        type: sequelize.STRING,
        primaryKey: true,
        
        allowNull:false,
    },
    nome:{
        type: sequelize.STRING,
        allowNull:false,
       
    },
    predio:{
        type: sequelize.STRING,
       
        allowNull:false,
    },
    andar:{
        type: sequelize.STRING,
        
        allowNull:false,
    },
    sala:{
        type: sequelize.INTEGER,
        
        allowNull:false,
    },
    capacidade:{ //quantidade máxima de pessoas no lab
        type: sequelize.INTEGER,
        
        allowNull:false,
    },
    numero_reserva_por_horario:{ //quantidade de vagas livre para reserva em cada lab
        type: sequelize.INTEGER,
        
        allowNull:false,
    },
});
lab.sync({force: false})

module.exports = lab