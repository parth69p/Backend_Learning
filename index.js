require('dotenv').config()
const express = require('express')
// import express from "express";

const app = express()

const port = process.env.PORT || 3000

app.get('/',(req,res)=>{
    res.send('HelloWorld')
})
app.get('/twitter',(req,res)=>{res.send('Parth')})

app.get('/login',(req,res)=>{
    res.send('<h1>Please Login </h1>')
})

app.get('/Youtube',(req,res)=>{
    res.send("<h2>Chai aur Code</h2>")
})

app.listen(process.env.PORT,()=>{
    console.log(`Example app listening on port ${port}`)
})