const express = require('express');

const { createCart, getCart } = require('../controller/cartController');
const authUser = require('../middleware/auth');

const router = express.Router();

router.post('/',authUser, createCart)

router.get('/',authUser, getCart)

module.exports = router;
