import express from "express";
import config from "config";
import customerModel from "../../models/Customer/Customer.js";
import bcrypt from "bcrypt"


const router = express.Router()

router.post("/customerRegister",async(req,res)=>{
    try {
        let customerData = req.body
        let customerEmail = customerData.email;

        let checkDuplicate = await customerModel.findOne({email: customerEmail})
        if(checkDuplicate){
            return res.status(400).json({msg:"Customer does not exist! "})
        }

        let secretKey = config.get("SECRET_KEY");
        let sendtoken = jwt.sign({ checkDuplicate}, secretKey,{expressIn: "1h"});

        let hashPassword = await  bcrypt.hash(customerData.password, 10);
        customerData.password = hashPassword;
        await customerModel.create(customerData)

        res.status(200).json({msg:"customer added in uber databaase"})
    } catch (error) {
        console.log("Errpr in registrations",error);
        res.status(500).json({msg: "An error occurred while registering. Please try again later"})
    }
})
router.post("/customerlogin",async(req,res)=>{
    try {
        let userData = req.body;
        let userEmail = userData.email;

        let checkdublicateUser = await customerModel.findOne({email: userEmail});
        if(!checkdublicateUser){
            return res.status(400).json({msg: "This customer does not exist"});
        }

        let secretKey = checkdublicateUser.password;
        let  checkPass = await bcrypt.compare(userData.password,hashPassword, 10)
        console.log(checkPass);

        if(checkPass){
            return res.status(200).json({msg: "Customer logged in successfull",token:sendtoken})
        } else{
            return res.status(400).json({msg: "Invalid credentials"});
        }
    } catch (error) {
        console.log(error);
        res.status(500).json({msg:error})
    }
})


//email Verify 
//Phone verify




export default router