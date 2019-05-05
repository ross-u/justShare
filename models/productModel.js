const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const productSchema = new Schema({
  description: String,
  allergens: String,
  pickupTime: String,
  restaurant: { type: Schema.Types.ObjectId, ref: 'Author' }
}, {
  timestamps: {
    createdAt: 'created_at',
    updatedAt: 'updated_at'
  }
});

const Product = mongoose.model('Product', productSchema);

module.exports = Product;
