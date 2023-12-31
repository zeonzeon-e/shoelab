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
import { withCookies, useCookies } from "react-cookie";
import axios from "axios";

axios.defaults.withCredentials = true;
function LoginPage(){
    const cookies= useCookies(['user']);
    const [hasCookie, setHasCookie] = useRecoilState(HasCookie);
  
    useEffect(()=>{
        setHasCookie(false);
    }, [hasCookie]);

    const [id, setId] = useState("");
    const [password, setPassword] = useState("");
    const userData = {
        userId: id,
        password: password,
    };
    const jsonData = JSON.stringify(userData);

    const handleSubmit = async(e) => {
        e.preventDefault();
        API.post("/user/sessionLogin",jsonData,)
        .then(res => {
            // console.log(res);
            // console.log(res.data)
            console.log(res.data.result);
            // if(res.data.result === 'ok'){
            //     setHasCookie(true);
            //     console.log(res);
            //     alert("반갑습니다" + res.config.data.userId +"님");
            // }else{
            //     throw new Error(res.error);
            // }
        })
        window.location.href = '/';
        // API.get("/user/sessionLogin")
    }


    // const loginApi = () => {
    //     API.post("/user/login",jsonData)
    //     .then(res =>{
    //         const data = res.data;
    //         console.log("data받아옴" + data);
    //     })
    // }

    // const handleSubmit = async(e) => {
    //     e.preventDefault();
    //     const res = await loginApi()

        // if(!id || !password){
        //     return;
        // }
        // try{
        //     const response = await loginApi({
        //         userId: id,
        //         password: password
        //     });
        //     console.log(response.result)
        //     if(response.result === 'ok'){
        //         setHasCookie(true);
        //     }else{
        //         throw new Error(response.error);
                
        //     }
        // }catch(err){
        //     alert("로그인에 실패했습니다.");
        //     setId('');
        //     setPassword('');
        //     console.error('login error',err);
            
        // }
    return(
        <div>
            <Header />
            <div className="content">
                <div className="form_div">
                    <p className="form_p">LOGIN</p>
                    <div className="form_div-box">
                        <p className="box_p">ID</p>
                        <Input color="#ffffff" name="id" onChange={event => {setId(event.target.value);}}
                         _placeholder={{ color: 'inherit' }} width='100%' fontSize="1vw" variant='flushed' size="lg"/>
                    </div>
                    <div className="form_div-box">
                        <p className="box_p">PASSWORD</p>
                        <Input color="#ffffff" name="pw" onChange={event => {setPassword(event.target.value);}}
                         _placeholder={{ color: 'inherit' }} width='100%' fontSize="1vw" variant='flushed' size="lg"/>
                    </div>
                    <div>
                    <Link to='/'>
                        <button className="box_button" onClick={handleSubmit}>로그인</button>
                    </Link>
                    <br></br>
                    <Link to='/join'>
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