const mongoose = require('mongoose');
const Schema = mongoose.Schema;


// Define collection and schema
const Order = new Schema({
   any: [],
   totalPrice: {
      type: String
   },
   created: {
       type: Date, default: Date.now()
   }
}, {
   collection: 'orders'
})

module.exports = mongoose.model('Order', Order)