import React from "react";
import "../css/reset.css";
import Header from "../components/Header";
import Footer from "../components/Footer";

function Main(){
    return(
        <div className="Page">
            <Header />
            <div className="content">
            </div>
            <Footer />
        </div>

    )
}

export default Main;