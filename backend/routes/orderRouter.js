const express = require('express');
const authUser = require('../middleware/auth');
const { createOrder } = require('../controller/orderController');



const router = express.Router();

router.post('/', authUser,createOrder);

module.exports = router;
