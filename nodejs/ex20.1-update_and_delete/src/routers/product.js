const express = require("express");
const router = new express.Router();
const Product = require("./models/producat");

router.put("api/products/:id", async (req, res) => {
  const { id } = req.params;
  const allowedFields = ["isActive", "details.discount"];
  const updateFields = Object.keys(req.body);
  const isValidField = updateFields.every((field) =>
    allowedFields.includes(field)
  );
  if (!isValidField)
    return res.status(400).send({ message: "Invalid field update attempt" });
  try {
    const product = await Product.findByIdAndUpdate(id, req.body, {
      new: true,
      runValidators: true,
    });
    if (!product)
      return res
        .status(404)
        .send({ message: `no product with id ${req.params.id}` });
    return res.status(200).send(product);
  } catch (error) {
    res.status(500).send(error);
  }
});

router.delete("api/products/:id", async (req, send) => {
  const { id } = req.params;
  try {
    const result = await Product.findByIdAndDelete(id);
    res.send(result);
  } catch (err) {
    res.status(500).send(err.message);
  }
});

router.delete("api/products", async (req, res) => {
  try {
    const result = await Product.deleteMany({});
    res.send(result);
  } catch (err) {
    res.status(500).send(err.message);
  }
});

// router.post("api/products", async (req, res) => {
//   const product = new Product(req.body);
//   try {
//     const result = await product.save();
//     res.status(201).send(result);
//   } catch (e) {
//     res.status(400).send(e.massage);
//   }
// });

// // get all products
// router.get("api/products", async (req, res) => {
//   try {
//     const result = await Product.find({});
//     res.send(result);
//   } catch (e) {
//     res.status(400).send(e.massage);
//   }
// });

// // get a specific product
// router.get("api/products/:id", async (req, res) => {
//   const { id } = req.params;
//   try {
//     const result = await Product.findOne({
//       _id: id,
//     });
//     res.send(result);
//   } catch (err) {
//     res.send(err.message);
//   }
// });

// // get products that are active
// router.get("api/products/activeProducts", async (req, res) => {
//   try {
//     const result = await Product.find({ active: true });
//     res.send(result);
//   } catch (e) {
//     res.status(400).send(e.massage);
//   }
// });

// //get products with a specific price range
// router.get("api/products/query", async (req, res) => {
//   const { min, max } = req.query;
//   if (min && max) {
//     try {
//       const result = await Product.find({
//         "details:price": { $gte: min, $lte: max },
//       });
//       res.send(result);
//     } catch (e) {
//       res.status(400).send(e.massage);
//     }
//   }
// });

module.exports = router;
