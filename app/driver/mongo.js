const mongoose = require('mongoose');

class Mongodb{
    constructor(host = '', user = '', password = '', database = '', port = '') {
        // this.con = mongoose.connect("mongodb://127.0.0.1:27017/toko_sederhana");
        this.con = mongoose.connect("mongodb://"+(user!==''?user+":"+password+"@":"")+host+":"+port+"/"+database);
        console.log("mongodb://"+(user!==''?user+":"+password+"@":"")+host+":"+port+"/"+database)
        this.check_connection();   
    }

    check_connection(){
        
        const db = mongoose.connection;
        db.on('error', (error) => {
            console.log("Error connecting database ...");
            console.error(error);
        })
        db.once('open', () => console.log('Database is connected ...'))
    }
}

module.exports = Mongodb;