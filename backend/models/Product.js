const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Define collection and schema
const Product = new Schema({
   category: {
      type: String
   },
   name: {
      type: String
   },
   price: {
      type: String
   },
   _id: {
      type: Schema.Types.ObjectId
   }
}, {
   collection: 'products'
});

module.exports = mongoose.model('Product', Product);