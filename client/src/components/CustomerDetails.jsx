/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
/* eslint-disable react-hooks/rules-of-hooks */
import React from 'react'
import formatDistanceToNow from 'date-fns/formatDistanceToNow'
import { useCustomerContext } from '../hooks/useCustomerHooks'


const CustomerDetails = ({customer}) => {
    const {dispatch} = useCustomerContext()

    const handleClick = async() => {
        const response = await fetch('/', + customer._id, {
            methods: 'DELETE',
            headers:{}
        })
        const json = await response.json()

        if(response.ok){
            dispatch({type:"delete_customer", payload:json})
        }

      

    }
    
  return (
    <div>
        <h4>{customer.name}</h4>
        <p><strong>Amount:</strong>{customer.amount}</p>
        <p><strong>Location:</strong>{customer.location}</p>
        <p><strong>Phone:</strong>{customer.phone}</p>
        <p>{formatDistanceToNow(new Date(customer.createdAt),{addSuffix: true}) }</p>
        <button><span onClick={handleClick}>delete</span></button>
      
      
    </div>
  )
}

export default CustomerDetails
