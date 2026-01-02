import express from 'express';
import { getCompanyData, getCompanyJobApplicants, getCompanyPostedJobs, loginCompany, registerCompany , postJob , changeJopApplicationStatus, changeVisiblity } from '../controllers/companyControllers';

const router = express.Router();

router.post('/register' ,upload.sinle('image'), registerCompany);

router.post('/login' , loginCompany);

router.get('/company' , getCompanyData);

router.post('post-job' , postJob);

router.get('/applicants' , getCompanyJobApplicants);

router.get('/list-jobs' , getCompanyPostedJobs);

router.post('/change-status' , changeJopApplicationStatus);
                                
router.post('/change-visiblity' , changeVisiblity);


export default router;