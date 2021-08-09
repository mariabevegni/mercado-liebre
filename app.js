const express = require('express')
const app = express()

const path = require('path')
const publicPath = path.resolve(__dirname,'./public')
const viewsPath = path.resolve(__dirname,'./views')

app.use (express.static(publicPath))
app.use (express.static(viewsPath))


app.get ('/', (req,res)=> {
    res.sendFile(path.resolve(__dirname,'./views/home.html'))
})



app.listen (process.env.PORT || 3000, ()=> console.log('Servidor corriendo para ML en puerto PORT o 3000'))
