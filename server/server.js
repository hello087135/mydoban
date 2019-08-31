let express = require("express");
let app = express()
let mongoose = require("mongoose")
let crypto = require("crypto");
let jwt = require("jsonwebtoken")
let bodyParser = require("body-parser");
// 1-3解决post接收参数
let ue = bodyParser.urlencoded({
    extended: false
})
//设置数据库的操作模板
let Db = mongoose.model("users", {
    username: String,
    userpass: String
})
//1-1.解决跨域问题
//中间件解决代理
app.use((req, res, next) => {
    //解决跨域
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Headers', 'Content-Type,Content-Length, Authorization, Accept, X-Requested-With , yourHeaderFeild');
    res.header('Access-Control-Allow-Methods', 'PUT, POST, GET, DELETE,OPTIONS');
    //进行路由
    next()
})
// 1-2设置post请求来接受发送过来的参数
app.post("/register", ue, (req, res) => {
    //接受前段数据并打印
    let username = req.body.username
    let userpass = req.body.userpass
    //连接数据库
    mongoose.connect("mongodb://127.0.0.1:27017/users", {
        useNewUrlParser: true
    }, function (err) {
        if (err) {
            console.log(err)
        } else {
            //查询数据库是否存在该用户名
            Db.find({
                username
            }).then(ok => {
                if (ok.length == 0) {
                    let db = new Db({
                        username,
                        userpass
                    })
                    db.save().then(ok => {
                        res.send("ok")
                    })
                } else {
                    res.send("err")
                }
            }, err => {
                console.log(err)
            })
        }
    })
})
app.post("/login", ue, (req, res) => {
    //接受前段的参数
    let username = req.body.username
    let userpass = req.body.userpass
    // console.log(username + "-------" + userpass)
    //连接数据库
    mongoose.connect("mongodb://127.0.0.1:27017/users", {
        useNewUrlParser: true
    }, err => {
        if (err) {
            console.log("数据库连接失败")
        } else {
            //查询数据库
            Db.find({
                username,
                userpass
            }).then(ok => {
                if (ok.length > 0) {
                    // 4-1存取token
                    let data = {
                        username,
                        userpass,
                        loginOk: true
                    }
                    let mi = "sas"
                    let token = jwt.sign(data, mi)
                    // 4 - 2 把token发送接前台
                    res.send({
                        data: "ok",
                        token
                    })
                } else {
                    res.send({
                        data: "err"
                    })
                }
            })
        }
    })
});
app.listen(3000)