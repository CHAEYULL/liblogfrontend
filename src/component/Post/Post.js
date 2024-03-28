import * as S from'./Post.style.js'
import {useState, useEffect} from 'react';
import { Link, useParams } from 'react-router-dom'
function Post(){
    let [post, setPost] = useState();
    let {id} = useParams()

    // console.log(post)
    useEffect(()=>{
        setTimeout(() => {
            fetch("/api/posts",{
                method :'GET'
            })
            .then((r)=>{return r.json()})
            .then((r)=>{
                // console.log(r)
                let copy = [...r]
                // console.log(copy)
                setPost(copy)
            })
            .catch((e)=>{
                console.log(`에러남 ${e}`)
            })    
        }, 100);
    },[])


    function detail(){
        fetch(`/api/details/:${postId}`,{
            method : 'GET'
        })
        .then((r)=>{return r.text()})
        .then((r)=>{
            // console.log(r)
        })
        .catch((e)=>{
            console.log(`에러남 ${e}`)
        })
    }
    return (
            <S.postContainer> 
                {
                post && post.map(function(a,i){
                    return (
                            <div key={i}>
                                <h4><Link to={post[i].url}>{post[i].title}</Link></h4>
                                <p><Link to={`/detail/${post[i].postId}`}>{post[i].content}</Link></p>
                                <p>{post[i].writer}</p>
                            </div>
                        )
                    })
                }
            </S.postContainer>
    )
}
export default Post