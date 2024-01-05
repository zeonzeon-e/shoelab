import {React, useState, useEffect } from "react";
import "../css/reset.css";
import "../css/login.css";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { Input } from "@chakra-ui/react";
import API from '../server/utils/API';
import { useCookies } from "react-cookie";
import { useRecoilState } from "recoil";
import { HasCookie } from "../components/state";

function JoinPage(){

    const [id, setId] = useState("");
    const [username, setUserName] = useState("");
    const [password, setPassword] = useState("");
    const [email, setEmail] = useState("");
    const [isJoinnSuccess, setJoinSuccess] = useState(false);

    const userData = {
        userId: id,
        password: password,
        userName : username,
        email : email
    };
    const jsonData = JSON.stringify(userData);

    const createUserApi = async(e) => {
        e.preventDefault();
        API.post("/user/join",jsonData)
        .then(res => {
            // console.log(res);
            // console.log(res.data)
            console.log(res.data.result);
            if(res.data.result === 'ok'){
                setJoinSuccess(true);
                console.log(isJoinnSuccess);
                alert("회원가입이 완료되었습니다");
                window.location.href = '/login';
            }else{
                throw new Error(res.error);
            }
        })
    }

    // const handleSubmit = async(e) => {
    //     e.preventDefault();
    //     try{
    //         const response = await createUserApi({
    //             userId: id,
    //             password: password,
    //             userName:username,
    //             email:email
    //         })
    //         if(response.result === 'ok'){
    //             setJoinSuccess(true);
    //             console.log(isJoinnSuccess);
    //         }
    //     }catch(err){
    //         console.error('join error', err);
    //         alert("회원가입에 실패하였습니다");
    //     }
    // }
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
                    <p className="form_p">JOIN US</p>
                    <div className="form_div-box">
                        <p className="box_p">ID</p>
                        <Input color="#ffffff" name="id" onChange={event => {setId(event.target.value);}}
                         _placeholder={{ color: 'inherit' }} width='100%' fontSize="1vw" variant='flushed' size="lg"/>
                    </div>
                    <div className="form_div-box">
                        <p className="box_p">NICKNAME</p>
                        <Input color="#ffffff" name="pw" onChange={event => {setUserName(event.target.value);}}
                         _placeholder={{ color: 'inherit' }} width='100%' fontSize="1vw" variant='flushed' size="lg"/>
                    </div>
                    <div className="form_div-box">
                        <p className="box_p">PASSWORD</p>
                        <Input color="#ffffff" name="pw" onChange={event => {setPassword(event.target.value);}}
                         _placeholder={{ color: 'inherit' }} width='100%' fontSize="1vw" variant='flushed' size="lg"/>
                    </div>
                    <div className="form_div-box">
                        <p className="box_p">EMAIL</p>
                        <Input color="#ffffff" name="pw" onChange={event => {setEmail(event.target.value);}}
                         _placeholder={{ color: 'inherit' }} width='100%' fontSize="1vw" variant='flushed' size="lg"/>
                    </div>
                    <div>
                        <button className="box_button" onClick={createUserApi}>회원가입 하기</button>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    )
}

export default JoinPage;