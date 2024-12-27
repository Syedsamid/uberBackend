import express from "express"
import config from "config"
import customerRouter from "./controllers/customer/index.js"
import publicRouter from "./controllers/public/index.js"

import "./utils/dbConnect.js";

const app = express();
const PORT = config.get("PORT");

app.use(express.json());


app.get("/",async(req,res)=>{
    try {
        res.status(200).json({msg:"hello samid"})
    } catch (error) {
        console.log(error);
        res.status(500).json({msg: error})
    }
})

app.use("/api/public",publicRouter)

app.use("/api/customer",customerRouter)

app.listen(PORT,()=>{
    console.log(`Server is running at PORT No. ${PORT}`);
})
