const { getData_user, setData_user, delData_user, addData_user } = require("../model/MHome")

class Home {

    constructor() {

    }

     index(req, res, next) {
        getData_user((err,data)=>{
            if(!err){
                res.json({
                    message:"success get data",
                    data:data

                })
            }else{
                res.json({
                    message:"error data"
                })
            }
        })
    }


    addAccount(req, res, next) {
        if (req.body.username && req.body.password) {
            addData_user(req.body,(err,data)=>{
                if(!err){
                    res.json({
                        message:"success add data",
                        data:data
    
                    })
                }else{
                    res.json({
                        message:"error add data"
                    })
                }
            })
        }else{
            res.json({
                message:"bad request",
            })
        }

    }

    updateAccount(req, res, next) {
        if (req.body.id && req.body.password) {
            setData_user(req.body,(err,data)=>{
                if(!err){
                    res.json({
                        message:"success update data",
                        data:data
    
                    })
                }else{
                    res.json({
                        message:"error update data"
                    })
                }
            })
        }else{
            res.json({
                message:"bad request",
            })
        }

    }

    deleteAccount(req, res, next) {
        if(req.body.id ){
            delData_user(req.body,(err,data)=>{
                if(!err){
                    res.json({
                        message:"success delete data",
                        data:data
    
                    })
                }else{
                    res.json({
                        message:"error delete data"
                    })
                }
            })
        }else{
            res.json({
                message:"bad request",
            })
        }
    }
}

module.exports = Home