const express=require('express');
const cors=require('cors');
const bodyParser=require('body-parser');
const models=require('./models');

const app=express();
app.use(cors());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
let user=models.User;
let apontamento=models.Apontamento;

app.post('/login',async (req,res)=>{
    let response=await user.findOne({
        where:{name:req.body.name, password: req.body.password}
    });
    if(response === null){
        res.send(JSON.stringify('error'));
    }else{
        res.send(response);
    }
});

app.post('/apontamento',async (req,res)=>{
    let response=await user.findOne({
        where:{estadoPaci:req.body.estadoPaci, acordadoPaci: req.body.acordadoPaci, lesaoPaci: req.body.LesaoPaci, sangraPaci: req.body.sangraPaci,
             doencaPaci: req.body.doencaPaci, apontaText1: req.body.apontaText1,
             apontaText2: req.body.apontaText2,  apontaText3: req.body.apontaText3}
    });
    if(response === null){
        res.send(JSON.stringify('error'));
    }else{
        res.send(response);
    }
});


let port=process.env.PORT || 3000;
app.listen(port,(req,res)=>{
    console.log('Servidor Rodando');
});