const sequelize = require('sequelize')
const database = require('../database/config')
const UserMat = require('./userMatricula')

const user = database.define('usuários',{
    matricula:{
        type: sequelize.STRING,
        primaryKey: true,
        
    },
    name:{
        type: sequelize.STRING,
        allowNull:false
    },
    email:{
        type: sequelize.STRING,
        allowNull:false
    },
    curso:{
        type: sequelize.STRING,
        allowNull:false
    },
    data_de_nascimento:{
        type: sequelize.STRING,
        allowNull:false
    },
    funcao_sistema:{
        type: sequelize.STRING,
        allowNull:false,
        defaultValue: 'NORMAL'
    },
});

user.belongsTo(UserMat,{foreignKey: 'matricula', allowNull: false})
user.sync({force: false})




module.exports = user