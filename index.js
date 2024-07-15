const express  = require('express');
const app = express();
const cors = require('cors');
const router = require('./app/router');
const bodyParser = require('body-parser');

const mongo = require('./app/driver/mongo');
const mdb =  new mongo('127.0.0.1','','','toko_sederhana',27017)

app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())
app.use(router)
console.log('\x1Bc');


app.listen(3000,()=>{
    console.log("🔥 Listen Server PORT: \x1b[33m 3000 \x1b[0m 🔥")
})