const express = require('express')
const path = require('path')
const app = express()

const filePath = path.resolve(__dirname,'public')


app.use(express.static((filePath)))

app.get("/",function(req,res) {
    res.send('HOLA MUNDO, MI NOMBRE ES LUIS SOLANO')
})

app.listen(8000,()=>{
    console.log('Servidor iniciado en el puerto 7777')
})