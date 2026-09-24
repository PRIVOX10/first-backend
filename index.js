const express = require("express");

const app = express();
const port = 3000;
const userRoute = require("./src/routes/userRoute");

app.use(express.json());
app.use("/user".userRoute);
app.listen(port, () => {
  console.log("server is running on port ", port);
});
