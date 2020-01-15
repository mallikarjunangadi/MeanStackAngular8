const mongoose = require("mongoose");

// Schema Definition for Products Collection
let definition = {
    ProductName: {
        type: String
    },
    ProductDescription: {
        type: String
    },
    ProductPrice: {
        type: Number
    }
};

let productSchema = new mongoose.Schema(definition);
let productModel = mongoose.model("Products",productSchema);

module.exports = {
    productModel: productModel
}