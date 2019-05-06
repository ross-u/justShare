const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const productSchema = new Schema({
  name: String,
  image: String,
  description: String,
  allergens: String,
  time: String,
  user: Schema.Types.ObjectId
}, {
  timestamps: {
    createdAt: 'created_at',
    updatedAt: 'updated_at'
  }
});

const Product = mongoose.model('Product', productSchema);

module.exports = Product;
