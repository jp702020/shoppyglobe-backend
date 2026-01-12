const Cart = require("../models/Cart");
const Product = require("../models/Product");

exports.addToCart = async (req, res) => {
  const product = await Product.findById(req.body.productId);
  if (!product) return res.status(404).json({ message: "Invalid product" });

  const cartItem = await Cart.create({
    userId: req.user.id,
    productId: req.body.productId,
    quantity: req.body.quantity
  });

  res.json(cartItem);
};

exports.updateCart = async (req, res) => {
  const item = await Cart.findByIdAndUpdate(
    req.params.id,
    { quantity: req.body.quantity },
    { new: true }
  );
  res.json(item);
};

exports.removeFromCart = async (req, res) => {
  await Cart.findByIdAndDelete(req.params.id);
  res.json({ message: "Item removed" });
};
