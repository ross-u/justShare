const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const User = require('./user');

const productSchema = new Schema({
  name: String,
  image: String,
  description: String,
  allergens: String,
  time: String,
  user: [{ type: Schema.Types.ObjectId, ref: 'User' }]
}, {
  timestamps: {
    createdAt: 'created_at',
    updatedAt: 'updated_at'
  }
});

const Product = mongoose.model('Product', productSchema);

module.exports = Product;
