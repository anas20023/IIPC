const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
require("dotenv").config();

const app = express();

// Middleware
app.use(
  cors({
    origin: "https://iipc.vercel.app", // Change to your frontend domain
  })
);
app.use(express.json());

// Connect to MongoDB
mongoose
  .connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("MongoDB connected"))
  .catch((err) => console.error("MongoDB connection error:", err));

// Define Schema and Model
const userSchema = new mongoose.Schema({
  Name: String,
  Email: String,
  Phone: String,
  StudentID: String,
  Section: String,
  Method: String,
  BKashNumber: String,
  NagadNumber: String,
  TransactionID: String,
  Reference: String,
  Status: String,
});

const User = mongoose.model("User", userSchema);

// API endpoint to get all users
app.get("/api/participants", async (req, res) => {
  try {
    const users = await User.find().select("Name Section StudentID");
    const shuffledUsers = users.sort(() => 0.5 - Math.random());
    res.json(shuffledUsers);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

app.get("/", (req, res) => {
  res.send("Hello World!");
});

// Export the app to be used as a Vercel serverless function
module.exports = app;
