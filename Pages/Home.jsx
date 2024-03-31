import react, { useEffect } from 'react';

const Home = ()=>{
    useEffect(()=>{
        alert("this is working fine")
    } , []);
    return(
        <div>heeelo its a home page
            </div>
    )

}

export default Home;
