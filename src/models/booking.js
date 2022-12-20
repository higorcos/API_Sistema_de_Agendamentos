const sequelize = require('sequelize')
const database = require('../database/config')
const Time = require('./time')
const User = require('./user')
const Lab = require('./lab')



const booking = database.define('reservas',{
    IdReserva:{
        type: sequelize.STRING,
        primaryKey: true,
        
    },
    justification:{
        type: sequelize.STRING,
        allowNull:false
    },
    status_pedido:{
        type: sequelize.STRING,
        allowNull:false,
        defaultValue: 'Em espera'
    },
    dia:{
        type: sequelize.DATEONLY,
        allowNull:false
    },
    answered:{
        type: sequelize.INTEGER,
        defaultValue: 0,
    }
    
});

    booking.belongsTo(User,{foreignKey: 'matricula'})
    User.hasMany(booking,{foreignKey: 'matricula'})
    booking.belongsTo(Lab,{foreignKey: 'laboratorioID'})
    Lab.hasMany(booking,{foreignKey: 'laboratorioID'})

    // booking.sync({force: true})




module.exports = booking