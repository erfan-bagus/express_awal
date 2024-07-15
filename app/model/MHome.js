const mongoose = require('mongoose');

const accountScema = new mongoose.Schema({
    username: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    }
})

const accountModel = new mongoose.model('accounts', accountScema);

function getData_user(call) {
    accountModel.find({}).then((res, err) => {
        call(err, res)
    })
}

function addData_user(data,call) {
    try {
        let model = new accountModel({
            username:data.username,
            password:data.password,
        });
        model.save()
        call(false,model);
    } catch (error) {
        call(error,false);
    }
}

async function setData_user(data, call) {

    accountModel.findOneAndUpdate({ _id: new mongoose.Types.ObjectId(data.id) }, {
        password: data.password
    }).then((res, err) => {
        call(err, res)
    })

}

function delData_user(data, call) {
    accountModel.findOneAndDelete({ _id: new mongoose.Types.ObjectId(data.id) }).then((res, err) => {
        call(err, res)
    })
}

module.exports = {
    getData_user: getData_user,
    addData_user: addData_user,
    setData_user: setData_user,
    delData_user: delData_user
}