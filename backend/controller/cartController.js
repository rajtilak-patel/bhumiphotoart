const Cart = require('../models/CartModel');

const createCart =  async(req, res) => {
    const { data, quantity } = req.body;
    console.log(data);
    let _id = data._id;
    console.log(data._id, quantity);
    // if user has already added the product to cart
    let cart = await Cart.findOne({ 'products.productId': _id });
  
    if(cart){
      // if product exists in the cart, update the quantity
      const productIndex = cart.products.findIndex(p => p.productId == _id);
      cart.products[productIndex].quantity += quantity;
    }else{
      // if product does not exist in cart, add new item
      cart = new Cart({
        userId: req.user._id,
        products: [{ productId:_id, quantity }]
      });
    }
    console.log(cart);
    await cart.save();
    res.status(201).send(cart);
  
    }

    // get cart
    const getCart = async(req, res) => {
        const cart = await Cart.find({}).populate('products.productId');
        if(!cart) return res.status(404).send('Cart not found');
        res.send(cart);
      }

    module.exports = {
        createCart,
        getCart
    }
  