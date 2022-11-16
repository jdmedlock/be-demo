const express = require('express')
const restRoutes = require('./routes/routes')

require('dotenv').config()

const app = express()

app.use((req, res, next) => {
  res.setHeader('Content-Type', 'application/json')
  res.setHeader('Access-Control-Allow-Origin', '*')
  res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept, Authorization')
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, PATCH, DELETE')
  next();
})

app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use('/', restRoutes)

app.listen(process.env.PORT, () => {
  console.log(`🚀 Server is running at ${process.env.PORT}`)
})