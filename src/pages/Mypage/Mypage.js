import {useEffect, useState} from 'react'
import {Link} from 'react-router-dom'
import Header from '../../component/Header/Header'
import * as S from './Mypage.style.js'
function Mypage(){
    let [userData, setUserData] = useState();
    let username
    useEffect(()=>{
        fetch("/mypage",{
            method:'GET'
        })
        .then((r)=>{return r.json()})
        .then((r)=>{
            let copy = {...r}
            // console.log(r.username)
            // let Username = r.username
            username = copy.username
            setUserData(username)
        })
        .catch((e)=>{
            console.log(`에러남 ${e}`)
        })
    },[])
    return (
        <>
            <Header></Header>
            <S.userDataContainer>
                <form>
                    <div><p>user :</p> <p>test</p></div>
                    <div><p>가입 시간 : </p></div>     
                    <div><p>about : </p><textarea name="about"></textarea></div>
                    <div><p>email : </p><input type="email" name="email"/></div>
                    <div><Link>비밀번호 변경</Link></div>
                    <button>업데이트</button>
                </form>
            </S.userDataContainer>
        </>
    )
}


export default Mypage