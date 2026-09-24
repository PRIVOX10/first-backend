const express = require("express");

const router = express.Router();
Router.post("/register", UserController.regiter);
module.exports = router;
