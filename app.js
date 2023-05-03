require('dotenv').config()
const express = require('express')
const { request } = require('http')
const app = express()
const path = require('path')

const port = process.env.PORT || 3000

app.listen(port, () =>{
    console.log("Escuchando al servidor en el puerto: " + port)
})

app.get('/', (request, response) =>{
    response.sendFile(path.resolve(__dirname, "index.html"))
})