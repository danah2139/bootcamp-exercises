const mongoose = require("mongoose");

mongoose.connect("mongodb://localhost:27017/e-commerceSite", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

// const notebook = new Product({
//   name: "notebook",
//   category: "laptops",
//   isActive: true,
//   details: {
//     description: "good looking notebook that remined you all of your tasks",
//     price: 1,
//     phone_number: "0509912802",
//     images: ["hii", "strrr"],
//   },
// });

// const pencile = new Product({
//   name: "pencile",
//   category: "Writing Tools",
//   discount: 3,
//   details: {
//     description: "help to write your notes",
//     price: 4,
//     phone_number: "0509912802",
//     images: ["hii", "strrr"],
//   },
// });

// const pen = new Product({
//   name: "pen",
//   category: "Writing Tools",
//   details: {
//     description: "help to write your notes",
//     price: 4,
//     phone_number: "0509912802",
//     images: ["hii", "strrr"],
//   },
// });

// const saveProd = async (products) => {
//   for (let product of products) {
//     try {
//       let savedProduct = await product.save();
//       console.log(savedProduct);
//     } catch (err) {
//       console.log(err);
//     }
//   }
// };

// saveProd([notebook, pencile, pen]);
