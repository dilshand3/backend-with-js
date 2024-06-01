require('dotenv').config()//This is for adding .env file for port
const express = require('express')//this is for express
const app = express()

const port = 3000 //this is port

app.get('/', (req, res) => {
    //this is our response on / , get is a URL type request
    res.send("hello this is my server")
})

app.get("/home", (req, res) => {
    //this is our response on / , get is a URL type request
    res.send("this is home route")
})

app.get('/sign-in', (req, res) => {
    //this is our response on / , get is a URL type request
    res.send("this is sign page")
})

app.listen(process.env.PORT, () => {
    console.log(`the server is running on ${port}`)
})