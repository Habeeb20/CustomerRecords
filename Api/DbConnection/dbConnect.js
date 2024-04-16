import mongoose from "mongoose";

export const DbConnect = async() => {
    const connect = await mongoose.connect("mongodb+srv://Habeeb:Ademola1234@habeeb.pal57xa.mongodb.net/techNotesDB?retryWrites=true&w=majority")
    try {
        if(connect)
        {
            console.log("database connected")
        }
    } catch (error) {
        console.log(error)
    }
}

export default DbConnect