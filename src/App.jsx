import React from "react"
import { Button } from "@chakra-ui/react"
import { Container } from "@chakra-ui/react"
import { px } from "framer-motion"
import { Route , Routes } from "react-router-dom"
import Userpage from "../Pages/Userpage"
import Postpage from "../Pages/Postpage"

function App() {
 

  return (
    <>
     <Container maxW="620px">
     <Routes>
      <Route index='/:username' element={<Userpage/>} />
      <Route path='/:username/post/:pid' element={<Postpage/>} />
     </Routes>
     </Container>
    </>
  )
}

export default App
