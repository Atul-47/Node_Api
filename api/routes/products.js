const express = require('express');
const router = express.Router();

router.get('/',(req,res,next) => {
    res.status(200).json({
        message: 'Product Get request'
    });
});

router.post('/',(req,res,next) => {
    const product = {
        name: req.body.name,
        price: req.body.price
    };
    res.status(201).json({
        message: 'Product Post request',
        createdProduct: product
    });
});

router.get('/:productId',(req,res,next) => {
    const id=req.params.productId;
    if (id=='special'){
        res.status(200).json({
            message:'Special ID'
        });
    }
    else {
        res.status(200).json({
            message:'No Special ID'
        });
    }
});

router.patch('/:productId',(req,res,next) => {
        res.status(200).json({
            message:'Updated product!'
        });
});

router.delete('/:productId',(req,res,next) => {
    res.status(200).json({
        message:'Deleted product!'
    });
});

module.exports = router;