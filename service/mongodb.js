const mongoose = require('mongoose');

mongoose.connect('mongodb+srv://fernanandre:3X8m8hyT0IAtqgrq@xpe-bootcamp.ihnqa.mongodb.net/store', { 
    useNewUrlParser: true, 
    useUnifiedTopology: true });
      const db = mongoose.connection;
      db.on('error', console.error.bind(console, 'connection error:'));
      db.once('open', () => {
        console.log('Connected to MongoDB');
  });

  module.exports = db;