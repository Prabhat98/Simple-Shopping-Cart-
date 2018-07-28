const express = require('express')
const path = require('path')
const server = express();


// For handling post requests we'd be needing following couple of lines

server.use(express.json());
server.use(express.urlencoded({extended:true}))



server.use('/',express.static(path.join(__dirname,'public')))
server.use('/api',require('./routes/api').route)

server.listen(4050,()=>
{
    console.log("Server running at http://localhost:4050")
})

/*
Delete this comment at last

Used - express,sequelize,mysql2

difference between "" and ''
*/