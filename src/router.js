const express = require("express");
const routes = express.Router();

const auth = require('../src/middleware/auth')
const user = require('../src/controllers/user');
const lab = require('../src/controllers/lab');

//user
routes.post("/user/login", user.login) //login 
routes.post("/user/new", user.register)  //Criação de novo usuário
routes.get("/user/matriculation/check", user.checkMatriculation) //verificar se número de matricula tá no banco de dados 
routes.get("/user/list", user.showList)  // lista de usuários
routes.put("/user/authorize/monitor", user.authorize)  // Elevar uma pessoa ao cargo de adm/monitor
routes.put("/user/disallow/monitor", user.disallow)  // Rebaixar uma pessoa (SEM CARGO)

//lab
routes.post('/lab/new',lab.register)//criar um lab
routes.get('/lab/list',lab.showListAll)//list todos os lab
routes.get('/lab/list/:lab',lab.showLab) //mostrar informações de um lab
routes.post('/lab/edit/:lab',lab.update) //atualizar



routes.get("/", auth.verifyJWT ,(req,res)=>{
    
    res.send('oi')
  })






module.exports = routes;
   
