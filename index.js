const express  = require('express');
const app = express();
const cors = require('cors');
const PORT  = process.env.PORT || 3000;

app.use(cors())
app.get('/', (req, res) => {
    // console.log(req.headers.cookie)
    res.send('Hello World!')
})

app.listen(PORT,()=>{
    console.log(`🔥 Listen Server PORT: \x1b[33m ${PORT} \x1b[0m 🔥`)
})