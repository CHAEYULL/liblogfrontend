import { styled } from 'styled-components';
import { useNavigate , Link} from 'react-router-dom';
import {useState} from 'react'
function Login(){
    let [username, setUsername] = useState("");
    let [password, setPassword] = useState("")
    let data = {
        username : username,
        password : password
    }
    function login(){
        fetch("/login", {
            method : 'POST',
            headers : {'Content-Type': 'application/json'},
            body : JSON.stringify(data),
        })
        .then((r)=>{return r.text()})
        .then((r)=>{
            console.log(r)
        })
        .catch((e)=>{
            console.log(`에러남${e}`);
        })
    }
    return (
        <div>
            
                <h3>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;로그인</h3>
                <br/>
                <h4>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;아이디 : <input name="username" onChange={(e)=>{setUsername(e.target.value)}}/></h4>
                <h4>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;비밀번호 :  <input name="password" onChange={(e)=>{setPassword(e.target.value)}}/></h4>
                <br/>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                <button onClick={login}>로그인</button>
            
            <br/><br/>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            <Link>비밀번호를 잊어 버리셨나요?</Link>
            <br/><br/>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            <Link to="/register">아직 계정이 없으신가요?</Link>
        </div>
    )
}
export default Login