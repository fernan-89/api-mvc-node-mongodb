const express = require('express');
const db = require('./service/mongodb')
const bodyParser = require('body-parser');
const userController = require('./controller/userController');
const app = express();
const PORT = 3000;

app.use(bodyParser.json());

  app.get('/api/users', userController.getAllUsers)
  app.get('/api/usercount', userController.countUsers)
  app.get('/api/users/:clientId', userController.getById)
  app.get('/api/username/:name', userController.getByName)
  app.post('/api/users', userController.newUser)
  app.put('/api/users/:clientId', userController.updateUser)
  app.delete('/api/users/:clientId', userController.deleteUserById)
  
  app.listen(PORT, console.log('Server is running on port: ' + PORT));