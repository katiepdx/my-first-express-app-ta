console.log('hello from app.js')
// import data
const players = require('./data.js')

// Web server - listening for http requests
const express = require('express')
const app = express()

app.get('/', (req, res) => {
  res.send('Hello World!')
})

// index route - GET all for a resource
app.get('/players', (req, res) => {
  res.send(players)
})

// show route - GET info for ONE resource
app.get('/players/:id', (req, res) => {
  const id = Number(req.params.id)
  const playerById = players.find(player => player.id === id)
  res.send(playerById)
})

// export app routes
// server.js will listen on port 3000 for incoming reqs to the routes
module.exports = app
