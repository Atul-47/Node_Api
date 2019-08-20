const express = require('express');
const router = express.Router();

router.get('/',(req,res,next) => {
    res.status(200).json({
        message: 'Product Get request'
    });
});

router.post('/',(req,res,next) => {
    res.status(200).json({
        message: 'Product Post request'
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

module.exports = router;