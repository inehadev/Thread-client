import {React} from "react"
import { Button } from "@chakra-ui/react"
import { Container } from "@chakra-ui/react"
import { px } from "framer-motion"
import { Route , Routes, useNavigate } from "react-router-dom"
import Userpage from "../Pages/Userpage"
import Postpage from "../Pages/Postpage"
import Header from "../Components/Header"
import Auth from "../Pages/AuthPage"
import Home from '../Pages/Home'
import { useRecoilValue } from "recoil"
import userScreenAtom from "../atoms/userAtom"
import Logout from "../Components/Logout"


function App() {
  const navigate = useNavigate();
 const user = useRecoilValue(userScreenAtom);

 

  return (
    <>
     <Container maxW="620px">
     <Header/>
     <Routes>

      
     <Route path='/auth' element={<Auth/>} />
     <Route path='/logout' element={<Logout/>} />
     <Route path='/' element={ user ? <Home/>  : navigate ('/auth') } />
     <Route path='/home' element={ <Home/>}/>
     <Route path='/user' element={<Userpage/>} />
      <Route index='/:username' element={<Userpage/>} />
      <Route path='/:username/post/:pid' element={<Postpage/>} />
     </Routes>
     </Container>
    </>
  )
}

export default App
