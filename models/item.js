const mongoose = require('mongoose');

const ItemSchema = new mongoose.Schema({
  name: { type: String, required: true },
  costPrice: { type: Number, default: 0 },
  sellingPrice: { type: Number, default: 0 },
}, {timestamps: true});

module.exports = mongoose.model('Item', ItemSchema);
