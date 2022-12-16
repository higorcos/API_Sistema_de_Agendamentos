const Time = require('../models/time')
const cuid = require('cuid')


module.exports = {
    //criação
    created:(req,res)=>{

        const name = req.body.name
        const turno = req.body.turno
        const  horario_inicial= req.body.horario_inicial
        const  horario_final= req.body.horario_final
        const visibilidade= req.body.visibilidade
  
        Time.create({
        id:cuid(),
          name ,
          turno ,
          horario_inicial,
          horario_final,
          visibilidade,
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
          // matricula,
          // name,
          // email,
          // curso,
          // data_de_nascimento,
      },
    //listar todos os horários
    list:(req,res)=>{
    const result = Time.findAll({order: [['horario_inicial', 'ASC']],}).then((result)=>{
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

