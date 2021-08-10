console.log('hello from index.js')
// Web server - listening for http requests
const express = require('express')
const app = express()
const port = process.env.PORT || 3000

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

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})
