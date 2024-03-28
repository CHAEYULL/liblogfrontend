import * as S from './Header.style.js'
import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';

function Header(){
    let navigate = useNavigate();
    let [username, setUsername] = useState("");
    console.log(username)
    function logout(){
        fetch("/api/logout", {
            method:'POST',
            headers : {'Access-Control-Allow-Origin': '*'},   
        })
        .then((r)=>{return r.text()})
        .then((r)=>{
            location.replace("/")
            // console.log(r)
        })
        .catch((e)=>{
            console.log(`로그아웃 실패 ${e}`)
        })
    }
    function writeAuth(e){
        if (username == ''){
            e.preventDefault()
            alert("로그인이 필요한 서비스입니다.")
        } else {
            location.replace("/write")
        }
    }
    useEffect(()=>{
        fetch("/api/userdata",{
            method:'GET'
        })
        .then((r)=>{return r.text()})
        .then((r)=>{
            // console.log(r)
            setUsername(r.name)
        })
        .catch((e)=>{
            console.log(`에러남 ${e}`)
        })
    },[])

    return(
        <div>
            <S.navbar>
               <S.logo>liblog</S.logo>
               <S.logout onClick={writeAuth}>작성</S.logout>
               {
                 username ==  undefined ? <S.flexBox><S.login onClick={()=>{navigate("/login")}}>로그인</S.login><S.register onClick={()=>{navigate("/register")}}>회원가입</S.register></S.flexBox> : <S.logout onClick={logout}>로그아웃</S.logout>
               }
            </S.navbar>
        </div>
    )
}
export default Header