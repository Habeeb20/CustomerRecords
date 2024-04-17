/* eslint-disable react-hooks/rules-of-hooks */
/* eslint-disable no-unused-vars */
import { createContext, useReducer } from "react";
import React from "react";


export const customerContext = createContext();

export const customerReducer = (state, action) => {
    switch(action.type){
        case 'set_customer':
            return {customer: action.payload}
        case 'create_customer':
            return {customer: action.payload, ...state.customer}
        case 'delete_customer':
            return {customer: state.customer.filter((w) => w._id !== action.payload._id ) }
        default:
            return state
    }
    
    
}

export const customerContextProvider = ({children}) => {
    const {state, dispatch} = useReducer(customerReducer, {customer:null})

    return (
    <customerContext.Provider value = {{...state, dispatch}}>
        {children}
    </customerContext.Provider>
    )
}