const express = require('express')
const Home = require('./controller/Home')
const router = express.Router()
const home = new Home();
router.get('/api/account', (req, res,next) => {
     
    home.index(req,res,next);
}).post('/api/account', (req, res,next) => {
    home.addAccount(req,res,next);
}).put('/api/account', (req, res,next) => {
    home.updateAccount(req,res,next);
}).delete('/api/account',(req, res,next) => {
    home.deleteAccount(req,res,next);
})

module.exports = router