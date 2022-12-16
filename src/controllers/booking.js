const Booking = require('../models/booking')
const BookingDate = require('../models/bookingTime')
const Time = require('../models/time')
const Lab = require('../models/lab')
const Users = require('../models/user')
const cuid = require('cuid')



module.exports = {
    //criação
    created:(req,res)=>{

        const justification = req.body.justification
        const status_pedido = req.body.status_pedido
        const matricula = req.body.matricula
        const horarioID = req.body.horarioID
        const laboratorioID = req.body.laboratorioID
        const dia = req.body.dia
        const IdReserva = cuid();

        Booking.create({
          IdReserva,
            justification,
            status_pedido,
            matricula,
            dia,
            laboratorioID,
        }).then((result)=>{
            BookingDate.create({
                id_reserva_date: cuid(),
                reservaID: IdReserva,
                horarioID,
                  
                 
      
              }).then((result)=>{
              
                res.status(200).json({
                    msg: 'Criação 2, ok',
                    err: false,
                    dados: result
                  })
              }).catch((err)=>{
                res.status(406).json({
                    msg: 'Criação 1, ERROR ',
                    err: true,
                    err_msg: err,
                    dados: ''
              })
             
            })
         
        })
   
      },
    //listar todos os horários
    list:(req,res)=>{
        Booking.findAll(
            {  
                //  where: {laboratorioID: '3'},
                //  where: {matricula: '2018001745'},
                //  where: {status_pedido: 'Aceito'},
                
                include: 
                [
                    {model:Lab},
                    {model:Users},
                {model: BookingDate,include: Time},
                
                //{model: BookingDate,include: Time, where:{horarioID: ''}},
                //{model: BookingDate,include: {model:Time, where:{turno: 'Matutino'}}},

                
                ]
        }
            ).then((result)=>{
        // {order: [['horario_inicial', 'ASC']]
        res.status(200).json({
            msg: 'Listagem, ok',
            err: false,
            dados: result
        })
    }).catch((err)=>{
        res.status(406).json({
            msg: 'Listagem, ERRO',
            err: true,
            err_msg: err,
            dados: ''
        })
    })
    },
     //listar todos os horários de um lab especifico
     listLab:(req,res)=>{
        Booking.findAll(
            {  
            where: {laboratorioID: req.params.idLab},
                
                
                include: 
                [
                    {model:Lab},
                    {model:Users},
                {model: BookingDate,include: Time},               
                ]
        }
            ).then((result)=>{
        // {order: [['horario_inicial', 'ASC']]
        res.status(200).json({
            msg: 'Listagem, ok',
            err: false,
            dados: result
        })
    }).catch((err)=>{
        res.status(406).json({
            msg: 'Listagem, ERRO',
            err: true,
            err_msg: err,
            dados: ''
        })
    })
    },
    //mostrar os dados de um horário especifico
    showTime:(req,res)=>{
        
        const result = Time.findAll({where:{id: req.params.id},}).then((result)=>{
            res.status(200).json({
                msg: 'Listagem, ok',
                err: false,
                dados: result
            })
        }).catch((err)=>{
            res.status(406).json({
                msg: 'Listagem, ERRO',
                err: true,
                err_msg: err,
                dados: result
            })
        })
    },
    //update horário
    update:(req,res)=>{ 
        
        const name = req.body.name
        const turno = req.body.turno
        const  horario_inicial= req.body.horario_inicial
        const  horario_final= req.body.horario_final
        const visibilidade= req.body.visibilidade
  
        Time.update({     
            name ,
            turno ,
            horario_inicial,
            horario_final,
            visibilidade,},{where:{id: req.params.id}}).then((result)=>{
            
            res.status(200).json({
            msg: 'Check, ok',
            err: false,
            dados: result})
        }).catch((err)=>{
            res.status(401).json({
            msg: 'Check, ERROR',
            err: true,
            err_msg: err,
            })
        })
    },
    //deletar 
    delete:(req,res)=>{
        
        Time.destroy({where:{id: req.params.id}}).then((result)=>{
            
            res.status(200).json({
            msg: 'Delete, ok',
            err: false,
            dados: result})
        }).catch((err)=>{
            res.status(401).json({
            msg: 'Delete, ERROR',
            err: true,
            err_msg: err,
            })
        })
    },
    //Ativar ou desativar visibilidade
    visibility:(req,res)=>{ 
        const id = req.params.id;
        const visibilidade = req.params.states;
        
        Time.update({visibilidade},{where:{id}}).then((result)=>{
            
            res.status(200).json({
            msg: 'Check, ok',
            err: false,
            dados: result})
        }).catch((err)=>{
            res.status(401).json({
            msg: 'Check, ERROR',
            err: true,
            err_msg: err,
            })
        })
    },
   
 
}

