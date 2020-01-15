const express = require("express");
const app = express();
const productRoutes = express.Router();

let Product = require("./../models/Products").productModel;

productRoutes.route("/add").post((req, res) => {
    let body = req.body;
 console.log(body)
    let product = new Product(body);
    product.save().then(() => {
        res.status(200).json({ message: "Product added successfully" });
    }).catch(e => {
        res.status(400).json({ message: "Unable to add product" });
    })
})

productRoutes.route("/").get((req, res) => {
    Product.find((err, products) => {
        if (err) {
            console.log(err);
            res.status(400).json({ message: "Unable to fetch products" })
        }
        else res.status(200).json(products)
    })
})

productRoutes.route("/edit/:id").get((req, res) => {
    let id = req.params.id;

    Product.findById(id, (err, product) => {
        res.status(200).json(product);
    })
})

productRoutes.route('/update/:id').put(function (req, res) {
    Product.findById(req.params.id, function (err, product) {
        if (!product)
            res.status(404).send("Record not found");
        else {
            product.ProductName = req.body.ProductName;
            product.ProductDescription = req.body.ProductDescription;
            product.ProductPrice = req.body.ProductPrice;

            product.save().then(product => {
                res.json('Update complete');
            })
                .catch(err => {
                    res.status(400).send("unable to update the database");
                });
        }
    });
});


productRoutes.route('/delete/:id').delete(function (req, res) {
    Product.findByIdAndRemove({_id: req.params.id}, function(err, product){
        if(err) res.json(err);
        else res.json('Successfully removed');
    });
});

module.exports = productRoutes;