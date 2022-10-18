const mongoose = require("mongoose");
const dotenv = require('dotenv'); 
dotenv.config()

// mongoDb connection
const connectDB = async () => {
  try {
    const URI = process.env.MONGO_URI
    await mongoose.connect(URI);
    console.log("Database connect successfully");
  } catch (error) {
    console.error(error.message);
    process.exit(1);
  }
};

module.exports = connectDB;
