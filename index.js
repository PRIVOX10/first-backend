require("dotenv").config();
const express = require("express");
const connectDB = require("./src/config/db");
const userRoute = require("./src/routes/userRoute");
const productRoute = require("./src/routes/productRoute");
const transactionRoute = require("./src/routes/transactionRoute");

const app = express();
const port = process.env.PORT || 3000;

connectDB();

app.use(express.json());
app.use("/user", userRoute);
app.use("/product", productRoute);
app.use("/transaction", transactionRoute);

app.listen(port, () => {
  console.log("server is running on port ", port);
});
