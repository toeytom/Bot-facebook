const express = require('express')
const app = express()
const login = require("facebook-chat-api");
const body = require("body-parser")
app.use(body());
app.set('view engine', 'ejs');
app.get('/',function(req,res){
    res.render('index');
})
app.post('/',function(req,res){
    console.log(req.body);
    login({email: req.body.id, password: req.body.pass}, (err, api) => {
    if(err) {
            res.send('ไม่สามารถเข้าบัญชีนี้ได้');
        }
    else{
    res.send('กำลังบอท');
    
    var id = api.getCurrentUserID()
    api.listen((err, message) => {
        if(message.threadID=="288971815258021"){
            api.logout();
        }
        else{
        api.sendMessage(req.body.data, message.threadID);
        }
    });
}

});
})

 
// Create simple echo bot

app.listen(8000,console.log("port open8000"))