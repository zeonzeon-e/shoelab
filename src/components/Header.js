import React from "react";
import '../css/reset.css';
import '../css/header.css';
import '../css/common.css';
import { Link } from 'react-router-dom'
import { Button } from "@chakra-ui/react";


function Header(){
    return(
        <div className="header">
            <p className="header_logo">
                <Link to='/'>
                SHOELAB
                </Link>
            </p>
            <div className="header_div-btn">
                <Link to='/commnunity' className="header_btn">커뮤니티</Link>
                <Link to='/order' className="header_btn">의뢰하기</Link>
                <Link to='/custom' className="header_btn">커스텀스페이스</Link>
                <Button bg='var(--pointColor)' color='black' height='5rem' width='10rem' _hover={{bg:'#ffffff'}} >
                    <Link to='/login' className="header_btn">로그인</Link>
                </Button>
            </div>
        </div>
    )
}

export default Header;