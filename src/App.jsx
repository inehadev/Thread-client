import React from "react"
import { Button } from "@chakra-ui/react"
import { Container } from "@chakra-ui/react"
import { px } from "framer-motion"
import { Route , Routes } from "react-router-dom"
import Userpage from "../Pages/Userpage"
import Postpage from "../Pages/Postpage"
import Header from "../Components/Header"
import Auth from "../Pages/AuthPage"
import { useRecoilValue } from "recoil"
import userScreenAtom from "../atoms/userAtom"

function App() {
 const user = useRecoilValue(userScreenAtom);

  return (
    <>
     <Container maxW="620px">
     <Header/>
     <Routes>
     <Route path='/auth' element={<Auth/>} />
     <Route path='/' element={ user ?<Userpage/>  :<Navigate to ='/auth'/> } />
      {/* <Route index='/:username' element={<Userpage/>} /> */}
      <Route path='/:username/post/:pid' element={<Postpage/>} />
     </Routes>
     </Container>
    </>
  )
}

export default App
