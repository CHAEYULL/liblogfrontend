import * as S from './Write.style.js'
import { useState , useEffect } from 'react';
import Header from '../../component/Header/Header'
import { useNavigate } from 'react-router-dom';
function Write() {
    let [title, setTitle] = useState("");
    let [url, setUrl] = useState("");
    let [content, setContent] = useState("");
    let navigate = useNavigate();
    // let [username, setUsername] = useState("");
    let data = {
        title : title,
        url : url,
        content : content,
        // writer : username
    }
    useEffect(()=>{
        fetch("/api/userdata",{
            method:'GET'
        })
        // .then((r)=>{return r.json()})
        .then((r)=>{
            // let copy = {...r}
            // // setUsername(copy.name)
            // console.log(copy.name)
        })
        .catch((e)=>{
            console.log(`유저 정보 불러오면서 에러남 ${e}`)
        })
    },[])
    function submit(){
        fetch("/api/submit",{
            method : 'POST',
            headers : {'Content-Type': 'application/json'},
            body : JSON.stringify(data)
        })
        .then((r)=>{return r.text()})
        .then((r)=>{
            console.log("등록 완료")
            location.replace("/")
        })
        .catch((e)=>{
            console.log(`게시물 등록하면서 에러남 ${e}`)
        })
    }
    return (
        <div>
            <Header></Header>
            <S.writeContainer>
                <div><p>title</p><input onChange={(e)=>{setTitle(e.target.value)}} name="title" id="title"/></div>
                <div><p>url</p><input  onChange={(e)=>{setUrl(e.target.value)}} name="url" id="url"/></div>
                <div><p>content</p><textarea  onChange={(e)=>{setContent(e.target.value)}} name="content" id="content"/></div>
                <button onClick={submit}>제출</button>
            </S.writeContainer>
        </div>
    )
}
export default Write