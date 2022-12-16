const Lab = require('../models/lab')
const cuid = require('cuid')


module.exports = {
    register:(req,res)=>{
      //nome,predio,andar,sala,capacidade,numero_reserva_por_horario
      const nome = req.body.nome
      const predio = req.body.predio
      const andar = req.body.andar
      const sala = req.body.sala
      const capacidade =req.body.capacidade
      const numero_reserva_por_horario = req.body.numero_reserva_por_horario

      Lab.create({
        id:cuid(),nome,predio,andar,sala,capacidade,numero_reserva_por_horario
      }).then((result)=>{
        res.status(200).json({
            msg: 'Criação, ok',
            err: false,
            dados: result
          })
      }).catch((err)=>{
        res.status(406).json({
            msg: 'Criação, ERROR ',
            err: true,
            err_msg: err,
            dados: ''
      })
     
    })
      
    },
    showListAll:(req,res)=>{
        Lab.findAll({}).then((result)=>{
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
    showLab:(req,res)=>{ 
        const id = req.params.lab // id laboratório 

        Lab.findOne({where:{id}}).then((result)=>{
            res.status(200).json({
            msg: 'Mostrar lab, ok',
            err: false,
            dados: result})
        }).catch((err)=>{
            res.status(401).json({
                msg: 'Mostrar lab, ERROR',
                err: true,
                err_msg: err,
            })
        })
    }, 
    update:(req,res)=>{
        const id = req.params.lab // id laboratório 
        const nome = req.body.nome
        const predio = req.body.predio
        const andar = req.body.andar
        const sala = req.body.sala
        const capacidade =req.body.capacidade
        const numero_reserva_por_horario = req.body.numero_reserva_por_horario

        Lab.update({nome,predio,andar,sala,capacidade,numero_reserva_por_horario},{where:{id}}).then((result)=>{
            
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
    delete:(req,res)=>{
        const id = req.params.lab // id laboratório 

        Lab.destroy({where:{id}}).then((result)=>{
            
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



    authorize:(req,res)=>{ 
        const matricula = req.body.matricula
        Lab.update({funcao_sistema:'ADMIN'},{where:{matricula}}).then((result)=>{
            
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
    disallow:(req,res)=>{
        const matricula = req.body.matricula
        Lab.update({funcao_sistema:'NORMAL'},{where:{matricula}}).then((result)=>{
            
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

//lab apagar
//user editar,apagar,listar

