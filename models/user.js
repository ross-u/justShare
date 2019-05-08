const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const userSchema = new Schema({
  username: String,
  password: String,
  email: String,
  restaurant: String,
  address: {
    street: String,
    number: String,
    city: String
  },
  neighborhood: String,
  location: {
    type: String,
    coordinates: [Schema.Types.Decimal128]
  }
}, {
  timestamps: { 
    createdAt: 'created_at',
    updatedAt: 'updated_at'
  }
});

userSchema.index({ location: '2dsphere' });

const User = mongoose.model('User', userSchema);

module.exports = User;
