'use strict'

const express = require('express')

const PORT = 8000
const HOST = '0.0.0.0'

const app = express()
app.get('/', (req, res) => {
    res.send('bryant lie\n')
    res.send('52021002\n')
    res.send('Teknik Informatika\n')
})

app.listen(PORT, HOST)
console.log(`Running on http://${HOST}:${PORT}`)

