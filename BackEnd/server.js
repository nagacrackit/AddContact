const express=require('express');
const mongoose=require('mongoose');
const bodyParser=require('body-parser');
const cors=require('cors');
const app=express();
const port=process.env.PORT || 8080;
const routes=require('./Routes/route');
const config=require('./Config/config');

//mongoDB connection
mongoose.connect(config.db,(err)=>{
    if(err) console.log(`error in db connection`);
    else console.log(`Db connected successfully`);
})


app.get('/',(req,res)=>{
    res.send('hello mean');
})

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }))
app.use(cors());


app.use('/',routes);

app.listen(port,()=>{
    console.log(`server started running on port ${port}`);
})