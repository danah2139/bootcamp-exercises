const express = require("express");
const app = express();
require("./db/mongoose");

const productRouter = require("./routers/product");
const port = process.env.PORT || 5000;

app.use(express.json());

app.use(productRouter);

app.listen(port, () => {
  console.log(`listening on port ${port}`);
});
