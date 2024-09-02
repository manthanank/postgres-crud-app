const express = require("express");
const app = express();
const itemRoutes = require("./routes/itemRoutes");

app.use(express.json());

app.get("/", (req, res) => {
  res.send("Welcome to the Items API");
});
app.use("/api/items", itemRoutes);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
