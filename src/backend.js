const express = require("express");
const connect = require("./configs/db");

const receipyController = require("./controllers/receipy.controller");

const app = express();

app.use(express.json());

app.use("/receipys", receipyController)

app.listen(3001, async () => {
  await connect();
  console.log("Hai friends i am listening 3001")
})