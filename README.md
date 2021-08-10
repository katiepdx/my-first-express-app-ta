# my-first-express-app-ta

# Steps for Creating Express App
1. Create a new GH repo with readme
1. open in vscode 
1. run `npm init -y`
  - this creates a `package.json` file
1. ACP 
1. add `.gitignore` and add `node_modules` inside file 
1. create routes in index.js
1. `nodemon index.js` to run server

# Deploying App to Heroku
1. `heroku create app-name`
1. 2 URLs returned - ...herokuapp.com & ...app-name.git
1. `git remote -v` --> shows heroku remote url
1. add script to `package.json` for starting app
  - `"start": "node index.js"`
  - Nodemon for constantly listening for changes: `"start:watch": "nodemon index.js"`
1. push to heroku (from main): `git push heroku main`
1. push to heroku (from dev): `git push heroku dev:main`
1. once deploy has successfully completed --> you can go to `...herokuapp.com` and view the deployed site!

# Data
1. add a data.js file
1. create data and save to a variable --> then `module.exports = dataVariable`
1. go to index.js and import data `const data = require('./data.js');`
1. can `res.send(data)` in an api endpoint
1. NOTE: undefined route error: `Cannot GET /blah`

# Testing Endpoints
1. create a `__test__` file with a `name.test.js` file
1. rename index.js to server.js
1. add app.js
1. server.js is responsible for listening
1. app.js responsible for the logic 
1. `npm i supertest` -- for making requests in testing to your apps endpoints
1. `npm i jest` -- for testing
1. add test script `"test": "jest"`
1. create `it` block with test
1. `npm run test` -- which runs `jest`
