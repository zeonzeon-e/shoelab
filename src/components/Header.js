import {React, useEffect, useState} from "react";
import '../css/reset.css';
import '../css/header.css';
import '../css/common.css';
import { Link } from 'react-router-dom'
import {useRecoilState} from "recoil"
import { HasCookie } from "./state";
import { withCookies, useCookies } from "react-cookie";
import API from '../server/utils/API';

function Header(){
    const [data, setData] = useState("");

    const cookies= useCookies(['user']);
    const [hasCookie, setHasCookie] = useRecoilState(HasCookie);
  
    useEffect(()=>{
        if(cookies.user && cookies.user !== 'undefined'){
            setHasCookie(true);
        }
        const fetchUser = async() => {
            const response = await API.get('/user/sessionLogin');
            setData(response.data);
        }
        fetchUser();
    }, []);

    const logout=()=>{
        setHasCookie(false);
        API.get("/user/sessionLogout")
    }
    
    return(
        <div className="header">
            <p className="header_logo">
                <Link to='/'>
                SHOELAB
                </Link>
            </p>
            <div className="header_div-btn">
                <Link to='/board' className="header_btn">커뮤니티</Link>
                <Link to='/order' className="header_btn">의뢰하기</Link>
                <Link to='/custom' className="header_btn">커스텀스페이스</Link>
                { !hasCookie ? <Link to='/login'><button className="header_loginBtn">로그인</button></Link> : 
                <button className="header_MypageBtn" onClick={logout}>로그아웃</button>
                }
                { (hasCookie || data.userId === 'undefined') ?
                    <Link to='/mypage'><button className="header_btn">{`${data.userId} 님`}</button></Link> : <div></div>}
            </div>
        </div>
    )
}

export default Header;