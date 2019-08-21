const express = require('express');
const router = express.Router();

router.get('/',(req,res,next) => {
    res.status(200).json({
        message: 'Orders Get request'
    });
});

router.post('/',(req,res,next) => {
    res.status(201).json({
        message: 'Orders Post request'
    });
});

router.get('/:orderId',(req,res,next) => {
        res.status(200).json({
            message:'Special ID',
            orderId:req.params.orderId
        });
});

router.delete('/:orderId',(req,res,next) => {
    res.status(200).json({
        message:'Deleted Order!'
    });
});

module.exports = router;