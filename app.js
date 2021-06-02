// Full Documentation - https://docs.turbo360.co
const vertex = require('vertex360')({ site_id: process.env.TURBO_APP_ID })
const express = require('express')

const app = express() // initialize app


const config = {
  views: 'views', // Set views directory
  static: 'public', // Set static assets directory
  logging: true,


  //database connections
  db: vertex.nedb()

}

vertex.configureApp(app, config)

const main = require('./routes/main')
app.use('/', main)
// import routes
// const index = require('./routes/index')
// const api = require('./routes/api') // sample API Routes

// set routes
// app.use('/', index)
// app.use('/api', api) // sample API Routes

module.exports = app
