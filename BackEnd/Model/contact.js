const mongoose=require('mongoose');

const contactSchema=mongoose.Schema({
    firstName:{type:String,require:true},
    lastName:{type:String,require:true},
    phone:{type:String,require:true}
})



const contact=module.exports=mongoose.model('contact',contactSchema);