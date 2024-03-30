import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { ChakraProvider, ColorModeScript, extendTheme } from '@chakra-ui/react'
import {mode} from '@chakra-ui/theme-tools'
import {BrowserRouter} from 'react-router-dom'
import { RecoilRoot } from 'recoil'
import { AuthProvider } from './Context/AuthContext.jsx'

const styles = {
  global:(props)=>({
    body: {
      color:mode('gray.800' , 'whiteAlpha.900')(props),
      bg:mode('gray.100' , '#101010')(props)
    }
  })
};

const config = {
  initialColorMode:"dark",
  useSystemColorMode:true
}

const color={
  gray:{
    dark:"#1e1e1e",
    light:"#616161"
  }
}

const theme = extendTheme ({config , styles , color})

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    
    
    <BrowserRouter>
   <ChakraProvider theme = {theme}>
    <ColorModeScript initialColorMode={theme.config.initialColorMode } />
    <AuthProvider>
    <RecoilRoot>
   <App />
   </RecoilRoot>
   </AuthProvider>
    </ChakraProvider>
    </BrowserRouter>
   
     </React.StrictMode>,
)
