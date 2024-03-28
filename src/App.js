import './App.css';
import {Routes, Route} from 'react-router-dom'
import Home from './pages/Home'
import Login from './pages/Login'
import Register from './pages/Register'
import Mypage from './pages/Mypage/Mypage';
import Write from './pages/Write/Write'
import Detail from './pages/Detail/Detail'
function App() {
  return (
    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/login" element={<Login/>}/>
      <Route path="/register" element={<Register/>}/>
      <Route path="/mypage" element={<Mypage/>}/>
      <Route path="/write" element={<Write/>}/>
      <Route path="/detail/:id" element={<Detail/>}/>
    </Routes>
  );
}

export default App;
