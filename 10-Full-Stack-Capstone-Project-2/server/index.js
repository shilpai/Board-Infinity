const express = require("express");
const connectDB = require("./config/DBconfig");
const FoodRoute = require("./routes/food.routes");
const app = express();
const cors = require("cors");
const fileUpload = require("express-fileupload");
require('dotenv').config({path: './config.env'})
const PORT = process.env.PORT || 4321;
connectDB();
app.use(express.json());
app.use(cors());

app.use(
  fileUpload({
    useTempFiles: true,
  })
);

app.use("/Food", FoodRoute);

app.get("/", (req, res) => {
  res.send("API working");
});

app.listen(PORT, (error) => {
  if (error) {
    console.log(error.message);
  }
  console.log("Server running...");
});
