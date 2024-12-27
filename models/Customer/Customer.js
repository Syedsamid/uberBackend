import { verify } from "crypto";
import mongoose from "mongoose"

let customerSchema = new mongoose.Schema({

    name:{
        type: String,
        required: true,
    },
    email:{
        type:String,
    },
    phone:{
        type: Number,
        required: true,
    },
    password:{
        type: String,
        unique: true,
    },
    userverified:{
        email:{
            type: Boolean,
            required: true,
        },
        phone: {
            type: Boolean,
            required: true,
        },
    },
    userverifytoken:{
        email:{
            type: String,
            required: true
        },
        phone:{
            type: String,
            required: true,
        },
    },


})
let customerModel  = mongoose.model("Customer", customerSchema,"customer");

export default customerModel
