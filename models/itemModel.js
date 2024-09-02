// models/itemModel.js
const pool = require("../config/db");

const getAllItems = async () => {
  const result = await pool.query("SELECT * FROM items");
  return result.rows;
};

const getItemById = async (id) => {
  const result = await pool.query("SELECT * FROM items WHERE id = $1", [id]);
  return result.rows[0];
};

const createItem = async (name, description) => {
  const result = await pool.query(
    "INSERT INTO items (name, description) VALUES ($1, $2) RETURNING *",
    [name, description]
  );
  return result.rows[0];
};

const updateItem = async (id, name, description) => {
  const result = await pool.query(
    "UPDATE items SET name = $1, description = $2 WHERE id = $3 RETURNING *",
    [name, description, id]
  );
  return result.rows[0];
};

const deleteItem = async (id) => {
  const result = await pool.query(
    "DELETE FROM items WHERE id = $1 RETURNING *",
    [id]
  );
  return result.rows[0];
};

module.exports = {
  getAllItems,
  getItemById,
  createItem,
  updateItem,
  deleteItem,
};
