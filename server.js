const express = require('express')
const app = express()
const port = process.env.port || 3000;
app.get('/' , (req , res) =>{
  res.send('Wow it\'s workin ')
})

app.post('/' , (req , res) =>{

  res.send(req.body)
})


app.listen(port , ()=>{
  console.log(`server is running on port ${port}`)
})