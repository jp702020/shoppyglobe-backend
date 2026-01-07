const express = require("express");
const cors = require("cors");
const errorHandler = require("./middleware/errorMiddleware");

const productRoutes = require("./routes/productRoutes");
const cartRoutes = require("./routes/cartRoutes");
const authRoutes = require("./routes/authRoutes");

const app = express();

app.use(cors());
app.use(express.json());

app.use("/products", productRoutes);
app.use("/cart", cartRoutes);
app.use("/", authRoutes);

app.use(errorHandler);

module.exports = app;
