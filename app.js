var express = require("express");
var app = express();
var ejs = require("ejs");
var router = require("./controller");
var jquery = require("jquery");



//设置模板引擎
app.set("view engine","ejs");

//静态资源
app.use(express.static("./public"));

//设置路由
app.get('/',router.showIndex);
app.get('/services',router.showService);
app.get('/skills',router.showSkills);
app.get('/works',router.showWorks);
app.get('/contact',router.showContact);
app.post('/doPostUserMsg',router.doPostUserMsg);

//监听
app.listen(3000);



