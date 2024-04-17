import { useContext } from "react";
import { customerContext } from "../context/customerContext";


export const useCustomerContext = () => {
    const context = useContext(customerContext)

    if(!context){
        throw new Error("useCustomerContext has an error")
    }

    return context;
}