const express = require("express");
const app = express();
const port = 3000;

const fileUpload = require("express-fileupload");
app.use(fileUpload());

app.post("/", (req, res) => {
  console.log(">>", req.files);
  res.sendStatus(200);
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
