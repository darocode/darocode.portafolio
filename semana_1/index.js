
/*const http=require("http")
 function handleServer(req, res){
    res.write('<h1>Respuesta del iusario</h1>')
    res.end();
 }


 const server = http.createServer(handleServer).listen(3007)
 
 
 /*const http = require('http');
const host = 'localhost';
const port = 3003;


const requestLister = function(req, resp){
    resp.writeHead(200);
    resp.apply("Esto es jm sjrvidor")
}

const server=http.createServer(requestLister);
server.listen(port, host),()=>{
    console.log(`servidor ejecutandos correctamente`)
}
const op = require('./ejercicio1.js');


op.sumar(8,5)
op.restar(10,7)
op.multiplicar(10,2)
op.diividir(10,5)*/

////////////////////////////////////////////////////////////////// EXPRESS JS ///////////////////////////////////////////////////////////

const express = require('express');
const app = express();
const port = 3007

app.use(express.static(__dirname + '/public'))

app.set('view engine', 'ejs');
app.set('views',__dirname + '/views')

//Rutas WEB
app.use('/', require('./router/RutasWeb'));





app.listen(port, ()=>{
    console.log(`Ejemplo del servidor en el puerto ${port}`)
})

app.get('/clientes', (req, res) => {
    res.send(`Hola Daniel`)
  })

app.delete('/clientes', (req, res) => {
    res.send('Got a DELETE request at /cliente')
  });


app.use((req, res, next)=>{
    res.status(404).sendFile(__dirname + '/public/404.html')
})






