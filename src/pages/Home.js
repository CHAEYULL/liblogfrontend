import Header from '../component/Header/Header'
import Post from '../component/Post/Post'
import {useEffect} from 'react'
function Home(){
    // useEffect(()=>{
    //     fetch("/", {method:'GET'})
    //     .then((r)=>r.text())
    //     .then((r)=>{
    //         location.reload(`${r}`)
    //         console.log(r)
    //     })
    // },[])

    return(
        <div>
            <Header></Header>
            <Post></Post>
        </div>
    )
}
export default Home