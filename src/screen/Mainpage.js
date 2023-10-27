import React from "react";
import "../css/reset.css";
import "../css/common.css";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Main from "../components/Main";

function MainPage(){
    return(
        <div className="Page">
            <Header />
            <div className="content">
                <Main />
            </div>
            <Footer />
        </div>

    )
}

export default MainPage;