const express  = require('express');
const app = express();
const cors = require('cors');
app.get('/', (req, res) => {
    // console.log(req.headers.cookie)
    res.send('Hello World!')
})

app.listen(8000,()=>{
    console.log("🔥 Listen Server PORT: \x1b[33m 8000 \x1b[0m 🔥")
})