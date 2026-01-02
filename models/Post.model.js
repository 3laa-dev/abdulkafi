const mongoose = require('mongoose');
const postSchema = mongoose.Schema({
    Type:{type:String , required:true},
    Title:{type:String,required:true},
    Description:{type:String,required:true},
    ImagePath:{type:String,required:true},
    Price:{type:Number,required:true}
})
module.exports = mongoose.model("Post", postSchema);