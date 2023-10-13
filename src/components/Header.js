import React from "react";
import '../css/reset.css';
import '../css/header.css';
import '../css/common.css';
import { Link } from 'react-router-dom'


function Header(){
    return(
        <div className="header">
            <p className="header_logo">SHOELAB</p>
            <div>
                <Link to='/commnunity' className="header_btn">커뮤니티</Link>
                <Link to='/order' className="header_btn">의뢰하기</Link>
                <Link to='/custom' className="header_btn">커스텀스페이스</Link>
            </div>
        </div>
    )
}

export default Header;