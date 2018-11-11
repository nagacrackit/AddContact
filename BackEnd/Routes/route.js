const express=require('express');
const contact=require('../Model/contact')
const router=express.Router();
;

//get contacts from db
router.get('/contacts',(req,res)=>{
    contact.find((err,contacts)=>{
        if(err) res.json(err);
        else res.json(contacts);
    });
})

//insert contact into the DB
router.post('/contact',(req,res)=>{
    const newContact=new contact({
        firstName:req.body.firstName,
        lastName:req.body.lastName,
        phone:req.body.phone
    })

    newContact.save((err,contact)=>{
        if(err) res.json({success:false,msg:err});
        else res.json({success:true,msg:contact})
    })
})

//delete db

router.delete('/contact/:id',(req,res)=>{
    contact.remove({_id:req.params.id},(err,contact)=>{
        if(err) res.json({success:false,msg:err})
        else res.json({success:true,msg:contact});
    })
})


module.exports=router;