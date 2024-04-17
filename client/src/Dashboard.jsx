/* eslint-disable no-unused-vars */
import React from 'react'
import { useState, useEffect } from 'react'
import CustomerDetails from './components/CustomerDetails'
import { useCustomerContext } from './hooks/useCustomerHooks'
import { Link } from 'react-router-dom'

const Dashboard = () => {
  const {customer, dispatch} = useCustomerContext();

  useEffect(() => {
    const fetchCustomer = async() => {
      const response = await fetch('/', {
        headers:{}
      })
      const json = await response.json()

      if(response.ok){
        dispatch({type: 'set_customer', payload: json})
      }
    }
  }, [dispatch])
  return (
    <div className="home">
      <div className="workout">
        {customer && customer.map((customer) => (
          <CustomerDetails key={customer._id} customer={customer} />
        ))}

      </div>
      <Link to="/customerForm"><h4>Add CustomerDetails</h4></Link>
      
    </div>
  )
}

export default Dashboard
