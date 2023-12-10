const express = require('express')
const { default: mongoose } = require('mongoose')

const cors = requier('cors')

const app =express()

app.use(express.json())

app.use(cors())

app.listen(9000, () => console.log('server is listening n port 9000'))

const mongoString = 'paste the link'
mongoose.connect(mon)