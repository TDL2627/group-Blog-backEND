const express = require('express')
const router = require('./routes')

const app = express()
app.use(express.json())

app.use(router)

app.get('/', (req, res) => {
    res.status(200).json({message: "Welcome to Super Blog's API"})
})

app.listen(8080, () => console.log('server is running on port 8080'))