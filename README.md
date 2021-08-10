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

