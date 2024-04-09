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
import CreatePost from "../Components/CreatePost"
import { Navigate } from "react-router-dom"
import UpadateProfilePage from "../Pages/UpdataProfilePage"



function App() {
  const user = useRecoilValue(userScreenAtom);
 console.log(user);

 

  return (
    <>
  
     <Container maxW="620px">
     <Header/>
     <Routes>
     <Route path='/home' element={ user ? <Home/>  :<Navigate to = '/auth' /> } />
     <Route path='/auth' element={!user ? <Auth/>: <Navigate to ='/'/>} />
     <Route path='/logout' element={ user ? <Logout/> : <Navigate to = '/auth'/>} />
     <Route path='/update/' element={user ? <UpadateProfilePage/> : <Navigate to = '/auth'/>}/>
      <Route path='/profile/:username' element={<Userpage/>} />
      <Route index='/' element={<Userpage/>} />
      <Route path='/:username/post/:pid' element={<Postpage/>} />
     
    

      {/* {user && <Logout/>} */}
      {/* {user && <CreatePost/>} */}
     

     </Routes>
     </Container>
    </>
  )
}

export default App
