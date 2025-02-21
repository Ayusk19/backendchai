require('dotenv').config()
const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => {
    res.send('Hello World!')
})

app.get('/instagram', (req, res)=>{
res.send('Hello Instagram!')
})

app.get('/login', (req, res) => {
    res.send('<h1 >Please login at Ayush ki website</h1>')
})


app.get('/youtube', (req, res)=>{
    res.send("<h2>chai aur code</h2>")
})

app.listen(Process.env.port, () => {
    console.log(`Example app listening on port ${port}`)
})

