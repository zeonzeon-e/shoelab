import React from "react";
import "../css/reset.css";
import "../css/main.css";
import "../css/common.css";

import { Box, Button } from "@chakra-ui/react";
import Shoe from '../shoes/shoe_green.png'

function Main(){
    return(
        <div className="Main_div">
            <div className="Main_div-img">
                <img src={Shoe} width='100%' alt="신발사진"/>
            </div>
            <div className="Main_div-txt">
                <p>세상에서 하나밖에 없는</p>
                <p>나만의 도안으로</p>
                <p>신발을 만들어보세요!</p>
                <Button _hover={{border:'3px solid var(--pointColor)', bg:'#ffffff' }}className="Maindiv_txt-btn" bg='var(--pointColor)' size='lg' h='4vw' w='10vw' fontFamily='SUTIE-Medium' fontSize='2rem'>Make it!</Button>
            </div>
        </div>
    )
}

export default Main;