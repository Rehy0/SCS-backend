const express = require('express')
const app = express()

app.get('/', function (req, res) {
  res.send("<h1>Hello World!</h1>")
})

app.get('/name',function(req,res){
res.send("<h1>My name is Rehan</h1>")
})

app.get('/name/surname',function(req,res){
res.send("<h1>My surname is Sheikh</h1>")
})

app.listen(3000)