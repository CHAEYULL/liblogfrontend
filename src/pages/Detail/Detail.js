import Header from '../../component/Header/Header'
import {useEffect, useState} from 'react'
import { useParams , Link } from 'react-router-dom';
import * as S from './Detail.style.js'
import { postContainer } from '../../component/Post/Post.style';
function Detail(){
    let {id} = useParams();
    let [postData, setPostData] = useState()
    let [username, setUsername] = useState("");
    // console.log(postData)
    // console.log(username)
    useEffect(()=>{
        // setTimeout(() => {
            fetch(`/api/details/${id}`,{
                method : 'GET'
            })
            .then((r)=>{return r.json()})
            .then((r)=>{
                setPostData(r)
            })
            .catch((e)=>{
                console.log(`에러남 ${e}`)
            })
            fetch("/api/userdata",{
                method:'GET'
            })
            .then((r)=>{return r.json()})
            .then((r)=>{
                // console.log(r.name)
                setUsername(r.name)
            })
            .catch((e)=>{
                console.log(`에러남 ${e}`)
            })    
        // }, 10);
    },[])

    return(
        <div>
            <Header></Header>
            <S.postContainer>
                <h4>{postData && postData.title}</h4>
                <textarea id="comment" name="comment"></textarea>
                <button>댓글 작성</button>
                {
                   username && username == postData.writer ? <button>dsadasad</button> : null
                }
            </S.postContainer>
        </div>
    )
}
export default Detail