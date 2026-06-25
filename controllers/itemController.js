const connectDB = require('../config/database');
const Item = require('../models/item');

// Create
exports.createItem = async (payload) => {
  try {
    const item = new Item(payload);
    const conn = await connectDB()
    console.log({DBConnectionStatus : conn.connection.readyState})
    const saveResp = await item.save();
    console.log('data saved succesfully...')
    return saveResp;
  } catch (err) {
    return {
      errorCode: 400,
      errorMessage: err
    }
  }
};

// Read All
exports.getItems = async (payload) => {
  const conn = await connectDB();
  const items = await Item.find();
  return items;
};

// Read One
exports.getItem = async (req, res) => {
  const item = await Item.findById(req.params.id);
  res.json(item);
};

// Update
exports.updateItem = async (id, payload) => {
  const conn = await connectDB();
  const updateResp = await Item.findByIdAndUpdate(id, payload, { new: true });
  return updateResp
};

// Delete
exports.deleteItem = async (req, res) => {
  await Item.findByIdAndDelete(req.params.id);
  res.json({ message: "Item deleted" });
};
