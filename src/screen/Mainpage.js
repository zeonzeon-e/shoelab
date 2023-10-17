import React from "react";
import "../css/reset.css";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Main from "../components/Main";

function MainPage(){
    return(
        <div className="content">
            <Header />
            <Main />
            <Footer />
        </div>

    )
}

export default MainPage;