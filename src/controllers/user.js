const User = require('../models/user')
const UserRegister = require('../models/userMatricula')
const jwt =  require('jsonwebtoken')
const SECRET  = 'ef3c5302'


module.exports = {
    showList:(req,res)=>{
    const result = User.findAll({}).then((result)=>{
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
    register:(req,res)=>{
      const matricula = req.body.matricula
      const name = req.body.name
      const email = req.body.email
      const curso = req.body.curso
      const data_de_nascimento= req.body.data_de_nascimento

      User.create({
        matricula,
        name,
        email,
        curso,
        data_de_nascimento,
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
    login:(req,res)=>{ 
        const matricula = req.body.matricula
        const email = req.body.email

        User.findOne({where:{email,matricula}}).then((result)=>{
            const token = jwt.sign({userId: result.matricula},
                SECRET,
                {expiresIn: 60*60*24})
            //604800
            //1 dia == 86400000
            //10 minutos == 600000
            // 5 segundos == 5000
            res.status(200).json({
            msg: 'Login, ok',
            err: false,
            token,
            dados: result})
        }).catch((err)=>{
            res.status(401).json({
                msg: 'Login, ERROR',
                err: true,
                err_msg: err,
            })
        })
    }, 
    checkMatriculation:(req,res)=>{
    const matricula = req.body.matricula
    UserRegister.findOne({where:{matricula}}).then((result)=>{
        
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
    authorize:(req,res)=>{ 
        const matricula = req.body.matricula
        User.update({funcao_sistema:'ADMIN'},{where:{matricula}}).then((result)=>{
            
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
        User.update({funcao_sistema:'NORMAL'},{where:{matricula}}).then((result)=>{
            
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

