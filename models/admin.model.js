const mongoose = require('mongoose');
const adminSchema = mongoose.Schema({
    UserName: { type: String, required: true, unique: true },
    Password: { type: String, required: true },
    JWT:{type:String}
})
module.exports = mongoose.model("admins", adminSchema);