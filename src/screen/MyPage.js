import {React, useState, useEffect } from "react";
import "../css/reset.css";
import "../css/login.css";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { Input } from "@chakra-ui/react";
import { Link } from "react-router-dom";
import API from '../server/utils/API';
import { useRecoilState } from "recoil";
import { HasCookie } from "../components/state";

function MyPage(){

    return(
        <div>
            <Header />
            <div className="content">
                <div className="form_div">
                </div>
            </div>
            <Footer />
        </div>
    )
}

export default MyPage;