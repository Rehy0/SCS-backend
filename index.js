const express = require('express')
const app = express()

app.use(function(req,res,next){
  console.log("middleware chala")
  next()
});

app.get('/', function (req, res) {
  res.send("<h1>Hello World!</h1>")
})

app.get('/name',function(req,res){
res.send("<h1>My name is Rehan</h1>")
})

app.listen(3000)

