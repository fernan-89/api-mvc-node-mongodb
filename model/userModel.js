const mongoose = require('mongoose');
const mongooseSequence = require('mongoose-sequence')(mongoose);

const userSchema = new mongoose.Schema({
  name: { 
    type: String, 
    required: true 
},
  address: { 
    type: String, 
    required: true 
},
  email: { 
    type: String, 
    required: true, 
    unique: true 
},
  cellphone : { 
    type: String, 
    required: true, 
    unique: true 
},
  createdate:{
    type: Date,
    default: Date.now(),
},
  clientId:{
    type: Number,
    unique: true,
}
});

userSchema.plugin(mongooseSequence, {id: 'user', inc_field: 'clientId'});

module.exports = mongoose.model('User', userSchema);

