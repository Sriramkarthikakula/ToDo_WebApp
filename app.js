const express = require("express")
const bodyparser = require('body-parser');
const app = express();
app.use(bodyparser.urlencoded({extended:true}));
app.set('view engine','ejs');
app.use(express.static('public'));

var lis = [];

var worklis = [];
app.get('/',function(req,res){
    const d = new Date();
    const options ={
        weekday:"long",
        day:"numeric",
        month:"long"
    }
    const a = d.toLocaleDateString('en-US',options);
    res.render('index',{day:a,aims:lis});
});
app.post('/',function(req,res){
    if(req.body.list === 'Work List'){
        var aiming = req.body.aim;
        worklis.push(aiming);
        res.redirect('/work');
    }
    else{
        var aiming = req.body.aim;
        lis.push(aiming);
        res.redirect('/');
    } 
})


app.get('/work',function(req,res){
    res.render('index',{day:"Work List",aims:worklis});
})
app.listen(3000,function(){
    console.log("hiiiii");
})