const sequelize = require('sequelize')

const connection = new sequelize('Sistema_de_agendamento', 'root', '@my2022001',{
    host:'localhost',
    dialect: 'mysql',
    timezone: '-03:00',//horário  para os horário do banco de dados

})

module.exports = connection;