/* eslint-disable no-unused-vars */
import React from 'react'
import {Link} from 'react-router-dom';
import { UserButton } from '@clerk/clerk-react';
import { useClerk } from '@clerk/clerk-react';


const Navbar = () => {
    const { user } = useClerk();
    const handleClick = () => {

    }
    return(
        <header>
            <div className='container'>
                <nav>
                <h1>Welcome to your dashboard {user.firstName}</h1>
                 <UserButton />
                </nav>
            
            </div>
        </header>
    )
   
}

export default Navbar