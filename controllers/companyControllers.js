
import Company from "../models/Company.js";
import bcrypt from "bctypt";
import {v2 as cloudinary} from 'cloudinary';

export const registerCompany = async (req ,res )=>{

    const {name , email , password} = req.body;

    const imageFile = req.file;

    if(!name || !email ||!password || !imageFile){
        return res.json({success:false , message: "Missing Details"});
    }

    try{
        const companyExists = await Company.findOne({email})
        if(companyExists){
            return res.json({success:false , message: "Company already registerd"});
        }

        const hashedPassword = await bcrypt.hash(password , salt);

        const imageUpload = await cloudinary.uploader.upload(imageFile.path);


    } 
    
       

}


export const loginCompany = async (req ,res )=>{


}

export const getCompanyData = async (req ,res )=>{


}

export const postJob = async (req ,res )=>{


}

export const getCompanyJobApplicants = async (req ,res )=>{


}

export const getCompanyPostedJobs = async (req , res )=>{
    
}


export const changeJopApplicationStatus = async (req ,res )=>{


}
export const changeVisiblity = async (req ,res )=>{


}





