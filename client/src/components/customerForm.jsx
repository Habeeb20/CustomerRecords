/* eslint-disable no-unused-vars */
/* eslint-disable react-hooks/rules-of-hooks */
import React from 'react'
import {useState} from 'react'
import { useCustomerContext } from '../hooks/useCustomerHooks'

const customerForm = () => {
const {dispatch} = useCustomerContext()

const [name, setName] = useState("")
const [phone, setPhone] = useState("")
const [location, setLocation] = useState("")
const [amount, setAmount] = useState("")
const [emptyField, setEmptyField] = useState([])
const [error, setError] = (null)

const handleSubmit = async(e) => {
e.preventDefault()


const customer = {name, phone, location, amount}

const response = await fetch('/', {
  method:'POST',
  body: JSON.stringify(customer),
  headers: {
    'Content-Type' : 'application/json',
    'Authorization': `Bearer `

  }
})

const json = await response.json()

if(!response.ok){
setError(json.error)
setEmptyField(json.emptyField)
}

if(response.ok){
  setName('')
  setAmount('')
  setLocation('')
  setPhone('')
  setError(null)
  setEmptyField([])
  console.log("new customer diary is added")
  dispatch({type: 'create_customer', payload:json})
}
  return (
    <form className="create" onSubmit={handleSubmit} action="">
      <h3>Add a new customer details</h3>

      <label htmlFor=''>Name</label>
      <input 
        type='text'
        onChange={(e) => setName(e.target.value)}
        value={name}
        className={emptyField?.includes('name') ? 'error' : ''}
        />

        <label htmlFor=''>Amount</label>
        <input 
          type='text'
          onChange={(e) => setAmount(e.target.value)}
          value={amount}
          className={emptyField?.includes('amount') ? 'error' : ''}
          />

        <label htmlFor=''>Location</label>
        <input 
          type='text'
          onChange={(e) => setLocation(e.target.value)}
          value={location}
          className={emptyField?.includes('location') ? 'error' : ''}
        />
        <label htmlFor=''>Phone No</label>
        <input 
          type='text'
          onChange={(e) => setPhone(e.target.value)}
          value={phone}
          className={emptyField?.includes('phone') ? 'error' : ''}
          />
      
      <button>Details</button>
      {error && <div className="error">{error}</div>}
    </form>
   
  )
}
}

export default customerForm;
