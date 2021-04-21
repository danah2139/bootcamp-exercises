const express = require("express");
const app = express();
require("./db/mongoose");
const Product = require("./models/producat");
const port = process.env.PORT || 5000;

app.use(express.json());

app.post("/products", async (req, res) => {
  const product = new Product(req.body);
  try {
    const result = await product.save();
    res.status(201).send(result);
  } catch (e) {
    res.status(400).send(e.massage);
  }
});

// get all products
app.get("/products", async (req, res) => {
  try {
    const result = await Product.find({});
    res.send(result);
  } catch (e) {
    res.status(400).send(e.massage);
  }
});

// get a specific product
app.get("/products/:id", async (req, res) => {
  const { id } = req.params;
  try {
    const result = await Product.findOne({
      _id: id,
    });
    res.send(result);
  } catch (err) {
    res.send(err.message);
  }
});

// get products that are active
app.get("/products", async (req, res) => {
  try {
    const result = await Product.find({ active: true });
    res.send(result);
  } catch (e) {
    res.status(400).send(e.massage);
  }
});

//get products with a specific price range
app.get("/products/query", async (req, res) => {
  const { min, max } = req.query;
  if (min && max) {
    try {
      const result = await Product.find({
        "details:price": { $gte: min, $lte: max },
      });
      res.send(result);
    } catch (e) {
      res.status(400).send(e.massage);
    }
  }
});

app.listen(port, () => {
  console.log(`listening on port ${port}`);
});
