/* eslint-disable react/jsx-no-undef */
/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */
import './App.css'

import ReactDOM from 'react-dom/client'
import './index.css'
import { ClerkProvider, RedirectToSignIn,SignIn, SignUp, SignedOut, SignedIn } from '@clerk/clerk-react'
import {useNavigate, BrowserRouter, Route,Routes} from 'react-router-dom' 
import ProtectedPage from "./ProtectedPage"
// eslint-disable-next-line no-undef
const PUBLISHABLE_KEY = process.env.VITE_CLERK_PUBLISHABLE_KEY
 
if (!process.env.VITE_CLERK_PUBLISHABLE_KEY) {
  throw new Error("Missing Publishable Key")
}

const root = ReactDOM.createRoot(document.getElementById("root"));

const SignInn = () => {
    const navigate = useNavigate()
  
  return (
   
    <ClerkProvider 
      publishableKey={PUBLISHABLE_KEY} 
      navigate = {(to) => navigate(to)}>
     
        <Routes>
          <Route path="/sign-in/" element={<SignIn redirectUrl={'/protected'} routing="path" path="/sign-in" />} />
          <Route path="/sign-up/" element={<SignUp redirectUrl={'/protected'} routing="path" path="/sign-up" />} />

          <Route path="/protected" element={ <>
          <SignedIn>
            <ProtectedPage /> 
          </SignedIn>
          <SignedOut>
            <RedirectToSignIn />
          </SignedOut>
          </>
          }
        />
        </Routes>
      
    </ClerkProvider>
  )
  
}

root.render(
  <React.StrictMode>
    <BrowserRouter>
   
    </BrowserRouter>
  </React.StrictMode>
);

export default SignInn
