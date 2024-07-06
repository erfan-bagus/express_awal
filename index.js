const express  = require('express');
const app = express();
const cors = require('cors');
const nunjucks = require('nunjucks')
const mysql = require('./driver/mysql');
app.get('/', (req, res) => {
    // console.log(req.headers.cookie)
    res.send('Hello World!')
})

app.get('/json', (req, res) => {
    res.json([
        { user: 'user1' },
        { user: 'user2' },
        { user: 'user3' },
        { user: 'user4' },
    ])
})

app.get('/jsonp', (req, res) => {
   // ?callback=foo
    // res.jsonp({ user: 'tobi' })
    // => foo({ "user": "tobi" })

    app.set('jsonp callback name', 'cb')

    // ?cb=foo
    res.status(500).jsonp({ error: 'message' })
    // => foo({ "error": "message" })

})
app.get('/redirect', (req, res) => {
    res.redirect('/json')
})

app.get('/render', (req, res) => {
    res.render('index',{test:"test variable dari server"})
})

app.get('/sendfile', (req, res) => {
    res.sendFile(__dirname+'/index.html')
})

app.get('/sendstatus', (req, res) => {
    res.sendStatus(200)
})

app.get('/download', (req, res) => {
    res.download(__dirname+'/api.json')
})


app.post('/post', function (req, res) {
    res.send('test data')
}) 

app.use(cors); 
app.set('view engine', 'html');  
nunjucks.configure('views', {
    noCache:false,
    autoescape: true,
    express: app
});
console.log('\x1Bc');
// contoh DDL
// mysql.query(`CREATE TABLE employee
// (
//     id int primary key,
//     name varchar(30)
// )`)
// app.set('view engine', 'pug')
mysql.query(`select * from employee`,function(err,result){
    if(!err){
        console.log(result)
    }else{
        console.log(err)
    }
})

app.listen(8000,()=>{
    console.log("🔥 Listen Server PORT: \x1b[33m 8000 \x1b[0m 🔥")
})