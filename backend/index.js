const express = require("express");
const router = require("./routes/router");
const mongoose = require("mongoose");
const cors = require("cors"); //
require("dotenv/config");

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// Apply cors middleware
app.use(cors({
  origin: "https://portfolio-webpage-react-frontend.vercel.app",
  methods: ["GET", "POST", "PUT", "DELETE"],
  allowedHeaders: ["Content-Type"],
  credentials: true
}));

app.use("/", router);

const dbOptions = { useNewUrlParser: true, useUnifiedTopology: true };

mongoose.connect(process.env.DB_URI, dbOptions)
  .then(() => console.log("DB Connected!"))
  .catch(error => console.log(error));

const port = process.env.PORT || 5000; 
const server = app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
