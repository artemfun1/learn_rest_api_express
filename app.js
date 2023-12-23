const exp = require('constants')
const express = require('express')
const path = require('path')
const app = express()


const CONTACTS = []



app.use(express.static(path.join(__dirname,'client')))

app.get('*',(req,res)=>{
  res.sendFile(path.join(__dirname,'client','index.html'))
})

app.listen(3000,()=>{
  console.log('Server START...')
})



