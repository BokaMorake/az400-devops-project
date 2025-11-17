const express = require("express");
const app = express();

// Render will inject PORT automatically
const port = process.env.PORT || 3000;

// Basic test endpoint
app.get("/", (req, res) => {
  res.json({ message: "Backend is running successfully!" });
});

// Keep server running
app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});

