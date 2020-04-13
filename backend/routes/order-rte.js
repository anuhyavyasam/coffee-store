const express = require('express');
const router = express.Router();

// Product model
const Order = require('../models/Order');



function save(req,  res) {
    const data = req.body;
    const order = Array.isArray(data) ? data : [data];
    console.log('request payload from UI', order);
    Order.create(order, (err, result) => {
        if(err) {
            next(err);
        }
        console.log('*result*', result);
        res.json(result);
    });
}


router.post('/order', save);

module.exports = router;