import react, { useEffect  , useState} from 'react';
import CreatePost from '../Components/CreatePost';
import { Link } from 'react-router-dom';
import { Button, Flex, Spinner } from '@chakra-ui/react';
import Post from '../Components/Post';

const Home = ()=>{
    const [loading , setloading]=useState(true);
    const [posts, setPosts] = useState([]);
    useEffect (()=>{
        const getfeedpost =async()=>{
            try {
                const res = await fetch ('/:postid');
                console.log(res);
                
            } catch (error) {
                console.log(error)
                
            }finally{
                setloading(false);
            }

        }
        getfeedpost();

    } , [])
   
    
    return(
        <>
        {/* <Link to={'/markzuckerberg'}>
        <Flex w={'full'} justifyContent={'center'} />
        <Button mx={"auto"}>visit profile page</Button>
        </Link>

        {/* <div><CreatePost/>
        
            </div> */}


            {!loading && postMessage.length==0 && <h1>follow user to see posts</h1>}
            {loading && (
                <Flex justify={'center'}>
                    <Spinner size={'xl'} />
                </Flex>
            )}

            {posts.map((post)=>(
                <Post key={post._id} post = {post} postedBy = {post.postedBy}/>

            ))}
            </>   
    )

}

export default Home;
