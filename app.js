console.log('hello from app.js')
// import data
const players = require('./data.js')

// Web server - listening for http requests
const express = require('express')
const app = express()

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.get('/puppies', (req, res) => {
  // looks for query params
  console.log(req.query);
  // looks for the name=dogName to add to the response
  // localhost:3000/puppies?name=Clifford
  res.send(`Puppies are cute! Especially ${req.query.name}`)
})

app.get('/players', (req, res) => {
  res.send(players)
})

// export app routes
// server.js will listen on port 3000 for incoming reqs to the routes
module.exports = app
