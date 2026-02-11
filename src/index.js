import express, { json } from "express";

const app = express();
const PORT = 8000;

// JSON middleware
app.use(json());

// Root GET route
app.get("/", (req, res) => {
  res.json({ message: "Welcome to the Express server!" });
});

// Start server
app.listen(PORT, () => {
  console.log(`Server is running at http://localhost:${PORT}`);
});
