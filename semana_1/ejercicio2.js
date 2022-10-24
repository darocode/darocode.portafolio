const express = require('express')

const server = express()

server.get('/', (req, res)=>{
    res.send("Hola Mundo con express")
})

server.get('/clientes', (req,res)=>{
    res.send("Pagina Clientes")
})

server.listen(3002, ()=>{
    console.log(`servidor 3002 en ejecucion`)
})