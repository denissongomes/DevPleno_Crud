const express = require('express')
const path = require('path')
const app = express()
const port = process.env.PORT || 3000
const mysql = require('mysql')

app.use(express.static('public'))

//view engine
app.set('view engine', 'ejs')
app.set('views', path.join(__dirname,'views'))

app.get('/', (req, res) => {
    res.render('home')
})

app.listen(port, () => {
    console.log('CRUD listening on port: ' + port)
})