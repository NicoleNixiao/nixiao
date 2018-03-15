var formidable = require("formidable");
var db = require("../models/db.js");

exports.showIndex = function (req,res,next) {
    res.render("index",{
        active:"index"
    });
}

exports.showService = function (req,res,next) {
    res.render("service",{
        active:"services"
    });
}

exports.showSkills = function(req,res,next){
    res.render("skills",{
        active:"skills"
    });
}

exports.showWorks = function(req,res,next){
    res.render("works",{
        active:"works"
    });
}

exports.showContact = function(req,res,next){
    res.render("contact",{
        active:"contact"
    });
}

exports.doPostUserMsg = function(req,res,next){
    var form = new formidable.IncomingForm();
    form.parse(req, function (err, fields, files) {
        var username = fields.name;
        var formail = fields.formail;
        var formsg = fields.formsg;
        if(username != "" && formail != ""){
            db.insertOne("userposts", {
                "username": username,
                "formail": formail,
                "formsg": formsg
            }, function (err, result) {
                if (err) {
                    res.send("-3"); //服务器错误
                    return;
                }
                res.send("1"); //注册成功
            });
        }
    });
}