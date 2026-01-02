const Admin = require('../models/admin.model');
const bcrypt = require('bcrypt');
const generateJWT = require('../utils/generateJWT');
const addAdmin = async (req, res) => {
    const { UserName, Password } = req.body;
    const test =await Admin.findOne({UserName});
    if(test)
        return res.json({error:"This User Is Exists"});
    if((!UserName ||  !Password)){
        return res.json({error:"Enter Username And Password"});
    }
    const hashedPass = await bcrypt.hash(Password , 10);
    const newAdmin = new Admin({UserName , Password:hashedPass});
    await newAdmin.save();
    res.json({NewAdmin:newAdmin.UserName});
    
}

const login = async(req ,res)=>{
    const {UserName , Password} = req.body;
    if((!UserName ||  !Password)){
        return res.json({error:"Enter Username And Password"});
    }

    const admin = await Admin.findOne({UserName});
    
    if(!admin){
        return res.json({error:"This UserName Is Not Exists"});   
    }
    const machedPass = await bcrypt.compare(Password , admin.Password);
    const token = await generateJWT({ UserName: admin.UserName, id: admin._id });
    admin.JWT = token;
    await admin.save();
    return res.json({Admin:admin.UserName , JWT:token});
}
module.exports={addAdmin , login};
