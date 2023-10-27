import {React, useEffect, useState } from "react";
import "../css/reset.css";
import "../css/login.css";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { Button, Input } from "@chakra-ui/react";
import { Link } from "react-router-dom";


function LoginPage(){
    const [id, setId] = useState("");
    const [password, setPassword] = useState("");


    return(
        <div>
            <Header />
            <div className="content">
                <div className="form_div">
                    <p className="form_p">LOGIN</p>
                    <div className="form_div-box">
                        <p className="box_p">ID</p>
                        <Input color="#ffffff" onChange={event => {setId(event.target.value);}}
                         _placeholder={{ color: 'inherit' }} width='100%' fontSize="1vw" variant='flushed' size="lg"/>
                    </div>
                    <div className="form_div-box">
                        <p className="box_p">PASSWORD</p>
                        <Input color="#ffffff" onChange={event => {setPassword(event.target.value);}}
                         _placeholder={{ color: 'inherit' }} width='100%' fontSize="1vw" variant='flushed' size="lg"/>
                    </div>
                    <div>
                    <Link to='/'>
                        <button className="box_button">로그인</button>
                    </Link>
                    <Link to='/'>
                        <button className="box_button" >회원가입</button>
                    </Link>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    )
}

export default LoginPage;