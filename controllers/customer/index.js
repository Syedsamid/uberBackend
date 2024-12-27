import express from "express"
import config from "config"
import customerModel from "../../models/Customer/Customer.js"

const router = express.Router()



router.get("/getone",async(req,res)=>{
    try {
        
        res.status(200).json({msg:"one customer added"})
    } catch (error) {
        console.log(error);
        res.status(500).json({msg: error})
    }
})


export default router