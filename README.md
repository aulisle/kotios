# Rento

Nuxt.js (Vue) + Express + MongodDB - Baugruppe application.

## Build Setup

Before building and running, 
* create an `.env`-file based on `.env.template`
* make sure you have mongodb running.

The `.env`-file contains the environment variables.

``` bash
# install dependencies
$ npm install

# serve with UI hot reload at localhost:3000
$ npm run dev

# build for production and launch server
$ npm start
```

After this, you need to create the first user based on .init-db-data.js.template using some
MongoDB editor. To create password hash, use bcrypt.

## Heroku deployment

Before pushing the contents of the project to Heroku, 
1. make sure to add a MongoDB instance
2. set the environment variables (see .env.template)
3. set heroku configuration and push.

``` bash
# change heroku host from localhost
$ heroku config:set HOST=0.0.0.0

# deploy the application
$ git push heroku master
```

After this, you need to create the first user with a MongoDB editor.

## Debugging in VS Code

Install Debugger for Chrome and refresh VS Code. In VS Code debugger tab there is fullstack: nuxt. Run it to use a more
in-depth debugger.


For detailed explanation on how things work, checkout the [Nuxt.js docs](https://github.com/nuxt/nuxt.js).
