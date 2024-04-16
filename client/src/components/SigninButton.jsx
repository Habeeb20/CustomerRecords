/* eslint-disable no-unused-vars */
import React from 'react'
import { SignInButton } from '@clerk/clerk-react'
const SigninButton = () => {
  return (
    <div>
          <SignInButton mode="modal" redirectUrl="/dashboard" />
      
    </div>
  )
}

export default SigninButton
