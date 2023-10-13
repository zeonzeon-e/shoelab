import React from "react";
import '../css/reset.css';
import '../css/Header.css';
import '../css/common.css';


function Header(){
    return(
        <div className="headerbox">
            <p>SHOELAB</p>
            <div>
                <input type="button" value="커뮤니티" />
                <input type="button" value="의뢰하기" />
                <input type="button" value="커스텀스페이스" />
            </div>
        </div>
    )
}

export default Header;