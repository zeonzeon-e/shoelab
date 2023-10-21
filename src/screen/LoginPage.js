import React from "react";
import "../css/reset.css";
import "../css/login.css";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { Button, Input } from "@chakra-ui/react";
import { Link } from "react-router-dom";

function LoginPage(){
    return(
        <div className="content">
            <Header />
            <div className="login_div">
                <div className="form_div">
                    <p className="form_p">LOGIN</p>
                    <div className="form_div-box">
                        <p className="box_p">ID</p>
                        <Input color="#ffffff" width='100%' fontSize="1vw" variant='flushed' value="" size="lg"/>
                    </div>
                    <div className="form_div-box">
                        <p className="box_p">PASSWORD</p>
                        <Input color="#ffffff" width='100%' fontSize="1vw" variant='flushed' value=""size="lg"/>
                    </div>
                    <div>
                    <Link to='/'>
                        <button className="box_button">로그인</button>
                    </Link>
                    <Link to='/'>
                        <button className="box_button">회원가입</button>
                    </Link>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    )
}

export default LoginPage;