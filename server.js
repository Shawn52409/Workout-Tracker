// Required dependancies
require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");

const PORT = process.env.PORT || 3001;

const app = express();

// Middleware
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(express.static("public"));

// Database connection
mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/workout", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useCreateIndex: true,
  useFindAndModify: false
});

// Routes
app.use(require("./routes/api-route.js"));
app.use(require("./routes/html-route.js"));

app.listen(PORT, () => {
  console.log(`App running on port ${PORT}!`);
});