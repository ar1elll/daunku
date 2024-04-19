const express = require('express')
const app = express()

const PORT = 3000
const mongoose = require('mongoose')
const path = require('path')

app.get('/', (req,res) =>{
    res.sendFile(path.join(__dirname< 'public', 'admin', 'index.html'))
})

app.listen(PORT, () =>{
    console.log(`server work on port: ${PORT}`)
})