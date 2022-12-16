const sequelize = require('sequelize')
const database = require('../database/config')
const Time = require('./time')
const Booking = require('./booking')
const Lab = require('./lab')



const booking_date = database.define('reservas_data_horario',{
    id_reserva_date:{
        type: sequelize.STRING,
        primaryKey: true,
        allowNull:false
        // type: Seq.INTEGER,
        //autoIncrement: true,
    }, 
});
    booking_date.belongsTo(Time,{foreignKey: 'horarioID'})
    Time.hasMany(booking_date,{foreignKey: 'horarioID'})

    booking_date.belongsTo(Booking,{foreignKey: 'reservaID'})
    Booking.hasMany(booking_date,{foreignKey: 'reservaID'})

    // booking_date.sync({force: true})



/*  
       //pertence a 
.belongsTo(,{foreignKey: ''})
        //tem muitos
.hasMany()   
*/

module.exports = booking_date