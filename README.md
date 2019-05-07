# justShare

#### Description

In the future food will not go to waste and no one will starve. We are here to make the future happen today.   justShare is a social platform to coordinate food sharing between food providers and people in need of food. 


## User

- Homepage  - As a user, the first thing I want to see is the logo and a description of what the app is about.
- Signup - As a user, I want a fast and easy way of registering so that I can start using the app right away.
- Signin - As a user, I want a fast and secure way of loggin in back into the app.
- Logout - As a user, I want to be able to log out of my profile to prevent unauthorized access
- 404 - As a user, I want an Error page that will 


## MVP

- Create Node.js and express server
- Create mongodb and mongoose database
- Create signup & signin routes and views
- Implement Authentication and Session
- Image upload 
- Implement call functionality
- Deploy on Heroku


## Backlog

- GeoLocation for location based searches
- Implement Chat 


## Datastructure

```js
|-- bin
|-- config
|   |-- config.js
|   |-- passport-config.js
|   |-- passport-local-strategy.js
|-- models
|   |-- provider.js
|   |-- consumer.js
|   |-- product.js
|-- node_modules
|-- public
|   |-- stylesheets
|   |   |-- style.css
|-- routes
|   |-- auth.js
|-- views
|   |-- auth
|   |   |-- signup.hbs
|   |   |-- signin.hbs
|   |   |-- profile.hbs
|   |-- error.hbs
|   |-- index.hbs
|   |-- layout.hbs
|-- .gitignore
|-- app.js
|-- package.json
|-- README.me
```


## Tasks

- Create provider model
- Create product model
- Add /signup GET route
  - Create signup form
- Add /signup POST route 
  - Check if credentials are valid, add user to DB
- Add /login GET route 
  - Create login form 
- Add /login POST route 
  - Check if credentials are valid, log the user in
- Add / GET route to access homepage
  - Add homepage view
- Add /new GET route 
  - Create new product form
- Add /new POST route
  - Add new products to DB
- Add /edit GET route
  - Create pre-populated form to edit selected product
- Add /edit POST route
  - Find and edit product in the DB
- Add /delete POST route 
  - Remove product from DB
 
