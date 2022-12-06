const express = require("express");
const app = express();
const port = 3000;
const mongoose = require("mongoose");

mongoose
  .connect(
    "mongodb+srv://joji6666:rl43290rl@cluster0.echrpmx.mongodb.net/?retryWrites=true&w=majority"
  )
  .then(() => console.log("mongoDB connected..."))
  .catch((err) => console.log(err));

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});

mongoose.set("strictQuery", true);
