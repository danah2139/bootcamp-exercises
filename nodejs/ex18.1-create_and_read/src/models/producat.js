const mongoose = require("mongoose");
const validator = require("validator");

const Product = mongoose.model("Product", {
  name: { type: String, required: true, unique: true },
  category: { type: String, required: true },
  isActive: { type: Boolean, default: false },
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

module.exports = Product;
