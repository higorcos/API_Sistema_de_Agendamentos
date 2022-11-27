const sequelize = require('sequelize')
const database = require('../database/config')
// const User = require('./user')

const userMat = database.define('usuário_matricula',{
    matricula:{
        type: sequelize.STRING,
        primaryKey: true,
        allowNull:false,
    },
    cargo:{
        type: sequelize.STRING,
        allowNull:false,
        defaultValue: 'DISCENTE'
    },

});
 

// userMat.belongsTo(User)
userMat.sync({force: false})

module.exports = userMat