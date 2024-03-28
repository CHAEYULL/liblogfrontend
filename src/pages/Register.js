import {Link} from 'react-router-dom'
import {useState} from 'react'




function Register(){

let [username, setUsername] = useState("");
let [password, setPassword] = useState("");
let [passwordCheck, setPasswordCheck] = useState("");
let data = {
    username : username,
    password : password,
    passwordCheck : passwordCheck
}
    function login(){
        fetch("/api/register", {
            method : 'POST',
            headers : {'Content-Type': 'application/json'},
            body : JSON.stringify(data),
        })
        .then((r)=>{return r.text()})
        .then((r)=>{
            console.log(r)
            location.reload("/")
        })
        .catch((e)=>{
            console.log(`에러남 ${e}`)
        })
    }
    return(
       
<>
            <div>
               
                    <h3>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;회원가입</h3>
                    <br/>
                    <h4>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;아이디 : <input id="username" name="username" onChange={(e)=>{setUsername(e.target.value)}}/></h4>
                    <h4>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;비밀번호 :  <input id="password" name="password" onChange={(e)=>{setPassword(e.target.value)}}/></h4>
                    <h4>&nbsp;&nbsp;&nbsp;&nbsp;비밀번호 확인:  <input name="passwordCheck" onChange={(e)=>{setPasswordCheck(e.target.value)}}/></h4>
                    <br/>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                    <button onClick={login}>&nbsp;&nbsp;&nbsp;계정 생성&nbsp;&nbsp;&nbsp;</button>
                
                <br/><br/>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                <Link to="/login">이미 계정이 있으신가요?</Link>
            </div>
</>
    )
}
export default Register