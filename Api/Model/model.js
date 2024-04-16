import mongoose from "mongoose";

const customerSchema = new mongoose.Schema({
    name :{
        type:String,
        required: true
    },
    phoneNumber :{
        type: String,
        required: true
    },
    amount :{
        type: String,
        required : true
    },
    location : {
        type: String,
        required: true
    }

}, {timestamps: true}
)

const CustomerSchema = mongoose.model("CustomerSchema", customerSchema)

export default CustomerSchema