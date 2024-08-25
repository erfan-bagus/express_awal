const express = require('express');
const app = express();
const cors = require('cors')
var data =[
    {
        id:1,
        nama:"buku",
        harga:10000
    },
    {
        id:2,
        nama:"gelas",
        harga:15000
    },
    {
        id:3,
        nama:"tv",
        harga:100000
    },
];
app.use(express.json())
app.use(cors())
app.get('/api',(req,res,next)=>{
    datares = data.filter(item=>item.id == req.query.id || req.query.nama?item.nama.toLowerCase().includes(req.query.nama.toLowerCase()):true )
    res.status(200).json({
        message:"berhasil mendapat data",
        data:datares
    });
})

app.post('/api',(req,res,next)=>{
    let dtreq = req.body;
    datares = data.find(item=>item.id == dtreq.id || item.nama.toLowerCase().includes(dtreq.nama.toLowerCase()) )
    if (!datares) {
        data.push({
            id:data.length+1,
            nama:dtreq.nama,
            harga:dtreq.harga
        });
        res.status(200).json({
            message:"berhasil menambah data"
        });
    }else{
        res.status(200).json({
            message:"tidak berhasil menambah data, data sudah ada"
        });
    }
    // res.set('Content-Type', 'text/plain'); 
})

app.put('/api',(req,res,next)=>{
    // res.set('Content-Type', 'text/plain'); 
    let dtreq = req.body;
    dataIndex = data.findIndex(item=>item.id == dtreq.id)
   if(dataIndex==-1){
    res.status(200).json({
        message:"tidak berhasil mengubah data, data tidak di temukan"
    });
   }else{
    data[dataIndex].nama =dtreq.nama
    data[dataIndex].harga = dtreq.harga
    res.status(200).json({
        message:"berhasil mengubah data"
    });
   }
   
})

app.delete('/api',(req,res,next)=>{
    let dtreq = req.body;
    dataIndex = data.findIndex(item=>item.id == dtreq.id)
    if(dataIndex==-1){
        res.status(200).json({
            message:"tidak berhasil delete data, data tidak di temukan"
        });
       }else{
        data.splice(dataIndex,1);
        res.status(200).json({
            message:"berhasil delete data"
        });
       }
})

app.listen(8000,()=>{
    console.log("\x1Bc");
    
    console.log("🔥 Listen Server PORT: \x1b[33m 8000 \x1b[0m 🔥");
})