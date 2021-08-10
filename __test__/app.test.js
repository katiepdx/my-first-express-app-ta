// bring in app - w endpoints
const app = require('../app')
// bring in supertest so we can make requests in the test
const supertest = require('supertest')
// need to pass in the app (file w/endpoints) to supertest so supertest can make reqs to our app
const request = supertest(app)

// bring in mock data
const data = require('../data.js')

it('returns the mock data of players when a GET req is made to /players endpoint', async() => {
  // make fetch REQUEST to app endpoints using supertest
  const response = await request.get('/players')

  // expect a 200 status code
  expect(response.status).toBe(200)
  // expect the res body to be the mock player data
  expect(response.body).toEqual(data)
})

it('gets the players show endpoint - player by id', async () => {
  const response = await request.get('/players/1')

  expect(response.status).toBe(200)
  expect(response.body).toEqual(
    { 
      id: 1, 
      name: 'Sue Bird', 
      team: 'Seattle Storm',
      isActive: true,
      number: 10
    }
  )
})
