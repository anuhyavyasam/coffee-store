const express = require('express');
const router = express.Router();

// Product model
const Order = require('../models/Order');



function save(req,  res) {
    const data = req.body;
    const order = Array.isArray(data) ? data : [data];
    Order.create(order, (err, result) => {
        if(err) {
            next(err);
        }
        res.json(result);
    });
}


router.post('/order', save);

module.exports = router;