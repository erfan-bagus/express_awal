const mysql = require('../driver/mysql');
function getData_user(call) {

    mysql.query('select * from accounts', function (err, result) {
        call(err, result);
    })
}

function addData_user(data, call) {
    let now = new Date().getTime()
    mysql.query(`insert into accounts(username,password,created_at,updated_at) VALUES('${data.username}','${data.password}',${now},${now})`, function (err, result) {
        call(err, result);
    })
}

function setData_user(data, call) {
    mysql.query(`update accounts set accounts.password ="${data.password}" where id=${data.id}`, function (err, result) {
        call(err, result);
    })
}

function delData_user(data, call) {
    //callback
    mysql.query(`delete from accounts where id=${data.id}`, function (err, result) {
        call(err, result);
    })
    //then
    // mysql.query(`delete from accounts where id=${data.id}`).then((err, result) => {
    //     // call(err,result);
    //     if (result) {
    //         return result
    //     } else {
    //         return err
    //     }

    // })


}

// async function delData_user(data) {
//     let query = await mysql.query(`delete from accounts where id=${data.id}`)
//     if (query) {
//         return result
//     } else {
//         return err
//     }
// }

// function delData_user(data) {
//     let query = mysql.query(`delete from accounts where id=${data.id}`)
//     if (query) {
//         return result
//     } else {
//         return err
//     }
// }
module.exports = {
    getData_user: getData_user,
    addData_user: addData_user,
    setData_user: setData_user,
    delData_user: delData_user
}