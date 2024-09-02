// controllers/itemController.js
const Item = require("../models/itemModel");

exports.getAllItems = async (req, res) => {
  try {
    const items = await Item.getAllItems();
    res.json(items);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

exports.getItemById = async (req, res) => {
  try {
    const item = await Item.getItemById(req.params.id);
    if (!item) {
      return res.status(404).json({ message: "Item not found" });
    }
    res.json(item);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

exports.createItem = async (req, res) => {
  const { name, description } = req.body;
  try {
    const newItem = await Item.createItem(name, description);
    res.status(201).json(newItem);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

exports.updateItem = async (req, res) => {
  const { name, description } = req.body;
  try {
    const updatedItem = await Item.updateItem(req.params.id, name, description);
    if (!updatedItem) {
      return res.status(404).json({ message: "Item not found" });
    }
    res.json(updatedItem);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

exports.deleteItem = async (req, res) => {
  try {
    const deletedItem = await Item.deleteItem(req.params.id);
    if (!deletedItem) {
      return res.status(404).json({ message: "Item not found" });
    }
    res.json(deletedItem);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
