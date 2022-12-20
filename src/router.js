const express = require("express");
const routes = express.Router();

const auth = require('../src/middleware/auth')
const user = require('../src/controllers/user');
const lab = require('../src/controllers/lab');
const time = require('../src/controllers/time');
const booking = require('../src/controllers/booking');

//user
routes.post("/user/login", user.login) //login 
routes.post("/user/new", user.register)  //Criação de novo usuário
routes.get("/user/matriculation/check", user.checkMatriculation) //verificar se número de matricula tá no banco de dados 
routes.get("/user/list", user.showListALL)  // lista de todos os usuários
routes.get("/user/list/:typeUser", user.showListType)  // lista de usuários AMD ou não
routes.put("/user/authorize/monitor", user.authorize)  // Elevar uma pessoa ao cargo de adm/monitor
routes.put("/user/disallow/monitor", user.disallow)  // Rebaixar uma pessoa (SEM CARGO)

//lab
routes.post('/lab/new',lab.register)//criar um lab
routes.get('/lab/list',lab.showListAll)//list todos os lab
routes.get('/lab/list/:lab',lab.showLab) //mostrar informações de um lab
routes.post('/lab/edit/:lab',lab.update) //atualizar
routes.delete('/lab/delete/:lab',lab.delete) //deletar

//time
routes.post('/time/new',time.created) // criar
routes.get('/time/list',time.list) //list
routes.get('/time/edit/:id',time.showTime) //mostrar os dados de um item
routes.post('/time/update/:id',time.update) //update
routes.delete('/time/delete/:id',time.delete) //deletar
routes.post('/time/visibility/:id/:states',time.visibility) //mudar visibilidade

//booking
routes.post('/booking/new',booking.created) // criar
routes.get('/booking/list',booking.list) // list 
routes.get('/booking/list/:idLab/:answered',booking.listLab) // list 
routes.get('/booking/list/:idBooking',booking.showBooking) // Mostar infor da reserva
routes.post('/booking/response/:idBooking/:status_pedido/:answered',booking.update) // Mostar infor da reserva
routes.get('/email',booking.testeemail) // Mostrar infor da reserva
routes.get('/list/user/booking/:user/:answered',booking.listLabUser) // Mostrar infor da reserva

// routes.get('/booking/list',booking.list) // list dos pedidos de um usuário 

//listar todos os pedidos de um lab(separar pelos starus)
//Autorizar == status
//listar pedido de um user (separar pelos starus)
//deletar pedido




routes.get("/", auth.verifyJWT ,(req,res)=>{
    
    res.send('oi')
  })






module.exports = routes;
   
