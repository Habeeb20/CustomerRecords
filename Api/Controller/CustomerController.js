import CustomerSchema from "../Model/model.js";

export const createCustomer = async(req, res) => {
    const {name, phoneNumber, amount, location} = req.body;

    let emptyField = []

    if(!name) {
        emptyField.push(name)
    }

    if(!phoneNumber) {
        emptyField.push(phoneNumber)
    }

    if(!amount) {
        emptyField.push(amount)
    }

    if(!location) {
        emptyField.push(location)
    }

    if(emptyField.length > 0){
        res.status(400).json("please fill in all the required spaces")
    }

    try {
        const savedetails = await CustomerSchema.create({name, phoneNumber, amount, location})
        return res.status(200).json({savedetails})
    } catch (error) {
        res.status(400).json(error.message)
    }
}


export const getCustomerdetails = async (req, res) => {
    const {id} = req.params;

    try {
        const CustomerDetails =  await CustomerSchema.findById(id)
        if(!CustomerDetails){
            res.status(400).json({message:"no such details is found"})
        }
        return res.status(200).json(CustomerDetails)
    } catch (error) {
        res.status(400).json(error.message)
        
    }
}

export const getAllCustomerDetails = async (req, res) => {
    try {
        const customerDetails = await CustomerSchema.find().sort({createdAt: -1})
        if(!customerDetails){
            res.status(404).json({message:"couldnt find the list"})
        }
        return res.status(200).json(customerDetails)
    } catch (error) {
        return res.status(400).json(error.message)
        
    }
   
}

export const deleteCustomerDetails = async( req, res) => {
    try {
        const {id} = req.params

        const customerDetails = await CustomerSchema.findByIdAndDelete({_id:id})
        if(!customerDetails)
        {
            return res.status(404).json({message:"not found to be deleted"})
        }
        return res.status(200).json(customerDetails)
    } catch (error) {
        return res.status(400).json(error.message)
        
    }
}

export const UpdateCustomerDetails = async (req, res) => {
    try {
        const {id} = req.params
        const customerDetails = await CustomerSchema.findByIdAndUpdate({_id:id}, {
            ...req.body
        })
        if(!customerDetails){
            return res.status(400).json({message:"couldnt update that document"})
        }
        return res.status(200).json(CustomerSchema)
    } catch (error) {
        return res.status(400).json(error.message)
        
    }
}