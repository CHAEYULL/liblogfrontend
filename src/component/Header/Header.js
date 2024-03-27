import * as S from './Header.style.js'
import {useNavigate} from 'react-router-dom'
function Header(){
    let navigate = useNavigate();
    return(
        <div>
            <S.navbar>
               <S.logo>liblog</S.logo>
               <S.register onClick={()=>{navigate("/register")}}>회원가입</S.register>
               <S.login onClick={()=>{navigate("/login")}}>로그인</S.login>
            </S.navbar>
        </div>
    )
}
export default Header