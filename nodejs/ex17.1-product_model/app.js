const mongoose = require("mongoose");
const validator = require("validator");

mongoose.connect("mongodb://localhost:27017/e-commerceSite", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const Product = mongoose.model("Product", {
  name: { type: String, required: true, unique: true },
  category: { type: String, required: true },
  isActive: { type: Boolean },
  details: {
    description: {
      type: String,
      required: true,
      minLength: 10,
    },
    price: {
      type: Number,
      required: true,
      min: 0,
    },
    discount: {
      type: Number,
      default: 0,
    },
    images: {
      type: [String],
      validate(value) {
        if (value.length < 2) {
          throw new Error("please insert at least 2 images");
        }
      },
    },
    phone_number: {
      type: String,
      required: true,
      validate(value) {
        if (!validator.isMobilePhone(value, ["he-IL"])) {
          throw new Error("phone number most be a valid isrealy phone number");
        }
      },
    },
    date: {
      type: Date,
      default: new Date(),
    },
  },
});
const notebook = new Product({
  name: "notebook",
  category: "laptops",
  isActive: true,
  details: {
    description: "good looking notebook that remined you all of your tasks",
    price: 1,
    phone_number: "0509912802",
    images: ["hii", "strrr"],
  },
});

const pencile = new Product({
  name: "pencile",
  category: "Writing Tools",
  discount: 3,
  details: {
    description: "help to write your notes",
    price: 4,
    phone_number: "0509912802",
    images: ["hii", "strrr"],
  },
});

const pen = new Product({
  name: "pen",
  category: "Writing Tools",
  details: {
    description: "help to write your notes",
    price: 4,
    phone_number: "0509912802",
    images: ["hii", "strrr"],
  },
});

const saveProd = async (products) => {
  for (let product of products) {
    try {
      let savedProduct = await product.save();
      console.log(savedProduct);
    } catch (err) {
      console.log(err);
    }
  }
};

saveProd([notebook, pencile, pen]);
