const Item = require('../models/item');

// Create
exports.createItem = async (req, res) => {
  try {
    const item = new Item(req.body);
    await item.save();
    res.status(201).json(item);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

// Read All
exports.getItems = async (req, res) => {
  const items = await Item.find();
  res.json(items);
};

// Read One
exports.getItem = async (req, res) => {
  const item = await Item.findById(req.params.id);
  res.json(item);
};

// Update
exports.updateItem = async (req, res) => {
  const item = await Item.findByIdAndUpdate(req.params.id, req.body, { new: true });
  res.json(item);
};

// Delete
exports.deleteItem = async (req, res) => {
  await Item.findByIdAndDelete(req.params.id);
  res.json({ message: "Item deleted" });
};
