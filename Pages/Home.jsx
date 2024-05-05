import react, { useEffect  , useState} from 'react';
import CreatePost from '../Components/CreatePost';
import { Link  } from 'react-router-dom';
import { Button, Flex, Spinner } from '@chakra-ui/react';
import Post from '../Components/Post';


const Home = ()=>{
    const [loading , setloading]=useState(true);
    const [posts, setPosts] = useState([]);
    useEffect (()=>{
        const getfeedpost =async()=>{
            const token = localStorage.getItem("x-auth-user");
            try {
                const res = await fetch(`http://localhost:5000/getfeedpost`, {
                   
                    method: "GET",
                    headers: {
                        "Content-Type": "application/json",
                        "x-auth-token":token
                        
                    },
                   
                });
                const data = await res.json();
                
                console.log(data);
                setPosts(data);
                if (data.error) {
                console.log("Error", data.error, "error");
                    
            }}catch (error) {
                console.log(error)
                
            }finally{
                setloading(false);
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

         <div><CreatePost/>
        
            </div>


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
