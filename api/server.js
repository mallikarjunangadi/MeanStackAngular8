let express = require("express"),
    path = require("path"),
    bodyParser = require("body-parser"),
    cors = require("cors"),
    mongoose = require("mongoose"),
    dbConfig = require("./dbConfig"),
    productRoutes = require("./routes/product.route");

mongoose.Promise = global.Promise;
mongoose.connect(dbConfig.dbUrl, { useNewUrlParser: true }).then(() => {
    console.log("Database connected");
}, (err) => {
    console.log("Cannot connect database : ",err);
})

const app = express();
/* const productRoutes = express.Router();
let ProductModel = require("./models/Products").productModel; */

app.use(bodyParser.json());
app.use(cors());
app.use("/products", productRoutes);
let port = process.env.PORT || 4000;

const server = app.listen(port, () => {
    console.log("Server listening on port : " + port);
});