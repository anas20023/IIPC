const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
require("dotenv").config(); 

const app = express();
const port = process.env.PORT || 3000; 

// Middleware
app.use(cors({
  origin: 'https://iipc.vercel.app' 
}));
app.use(express.json()); 

// Connect to MongoDB
mongoose
  .connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("MongoDB connected"))
  .catch((err) => console.error("MongoDB connection error:", err));
// API endpoint to get all users

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
app.get("/participants", async (req, res) => {
  try {
    const users = await User.find().select("Name Section StudentID"); // Assuming you have a User model for the users collection
    const shuffledUsers = users.sort(() => 0.5 - Math.random());

    res.json(shuffledUsers);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});
app.get('/',(req,res)=>{
  res.send('Hello World!')
})
app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
