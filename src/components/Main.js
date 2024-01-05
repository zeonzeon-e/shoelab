import {React} from "react";
import "../css/reset.css";
import "../css/main.css";
import "../css/common.css";

import { Box, Button } from "@chakra-ui/react";
import Shoe from '../shoes/shoes3.png'
import { Link } from "react-router-dom";

function Main(){

    return(
        <div className="Main_div">
            <div className="Main_div-img">
                <img src={Shoe} />
            </div>
            <div className="Main_div-txt">
                <p>세상에서 하나밖에 없는</p>
                <p>나만의 도안으로</p>
                <p>신발을 만들어보세요!</p>
                <Link to='/custom'>
                    <button className="pointColor_Btn">Make it!</button>
                </Link>
            </div>
        </div>
    )
}

export default Main;