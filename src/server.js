//dotenv
//require('dotenv').config()
const express = require('express')
const server = express()
const routes = require('./router')
//const database = require('../src/database/config')
const bodyParser = require('body-parser')
const cors = require('cors');
  
//Req.body
server.use(bodyParser.urlencoded({
	extended: false})) 
server.use(bodyParser.json())

//CORS
server.use((req, res, next) => {
	//Qual site tem permissão de realizar a conexão, no exemplo abaixo está o "*" indicando que qualquer site pode fazer a conexão
    res.header("Access-Control-Allow-Origin", "*");  
	//Quais são os métodos que a conexão pode realizar na API
    res.header("Access-Control-Allow-Methods", 'GET,POST,PUT,DELETE');
    res.header("Access-Control-Allow-Headers", '*');
    server.use(cors()); 
    next();  
});

//Router
server.use(routes)

const porthttp = 3006



server.listen(porthttp,()=>{
	console.log(`\n\t********\tServidor na online na porta(${porthttp})\t********\n`)
})
 
