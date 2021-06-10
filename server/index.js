const express = require('express')
const app = express()

require('dotenv').config()


app.get('/', (req, res) => {
    res.send('Hello I am from server')
})

const port = process.env.PORT || 5000; 

app.listen(port, () => console.log(`Server is started at the port of ${port}`))