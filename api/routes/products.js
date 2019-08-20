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

module.exports = router;