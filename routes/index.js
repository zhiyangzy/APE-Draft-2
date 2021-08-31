const express = require('express');
const router = express.Router();
const path = require('path');
const publicPath = __dirname + '/../public/';
router.get('/', (req,res)=>{
    res.sendFile(path.join(publicPath, 'home.html'));
});

module.exports = router

