import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import { ChakraProvider } from '@chakra-ui/react'
import { GoogleOAuthProvider } from '@react-oauth/google';



ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <ChakraProvider>
      <GoogleOAuthProvider clientId="517185463078-hli6mliem48epsbd387h794aerglr9r4.apps.googleusercontent.com">
        <App />
      </GoogleOAuthProvider>;
    </ChakraProvider>
  </React.StrictMode>,
)
