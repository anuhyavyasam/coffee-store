const express = require('express');
const router = express.Router();

// Product model
const Product = require('../models/Product');


// Get All products
function getProducts(req, res) {
    Product.find((err, data) => {
        if (err) {
            return next(err)
          } else {
            console.log('responing back to client', data);
            res.json(data)
          }
    });
}

function addProduct(req,  res) {
    const data = req.body;
    const products = Array.isArray(data) ? data : [data];
    Product.create(products, (err, result) => {
        if(err) {
            next(err);
        }
        res.json(result);
    });
}

function getProduct(req, res) {
    const id = req.params.id;
    Product.findById(id, (err, data) => {
        if (err) {
            return next(err);
          } else {
            res.json(data);
          }
    });
}

function updateProduct(req, res) {
    Product.findByIdAndUpdate(req.params.id, {
        $set: req.body
      }, (error, data) => {
        if (error) {
          console.log(error)
          return next(error);
        } else {
          res.json(data)
          console.log('Data updated successfully')
        }
      });
}

function deleteProduct(req, res) {
    Product.findOneAndRemove(req.params.id, {
        $set: req.body
      }, (error, data) => {
        if (error) {
          console.log(error)
          return next(error);
        } else {
          res.json(data)
          console.log('Data removed successfully');
        }
      });
}

router.get('/product', getProducts);

router.post('/product', addProduct);

router.get('/product/:id', getProduct);

router.put('/product/:id', updateProduct);

router.delete('/product/:id', deleteProduct);

module.exports = router;