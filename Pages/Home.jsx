import react, { useEffect } from 'react';
import CreatePost from '../Components/CreatePost';
import { Link } from 'react-router-dom';
import { Button, Flex } from '@chakra-ui/react';

const Home = ()=>{
    useEffect (()=>{
        const getfeedpost =async()=>{
            try {
                const res = await fetch ('/:postid');
                console.log(res);
                
            } catch (error) {
                console.log(error)
                
            }

        }
        getfeedpost();

    } , [])
   
    
    return(
        <>
        <Link to={'/markzuckerberg'}>
        <Flex w={'full'} justifyContent={'center'} />
        <Button mx={"auto"}>visit profile page</Button>
        </Link>

        {/* <div><CreatePost/>
        
            </div> */}
            </>  
    )

}

export default Home;
