import React from "react";
import "../css/reset.css";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Master from "../components/Master";

function Main(){
    return(
        <div className="Page">
            <Header />
            <div className="content">
                <Master />
            </div>
            <Footer />
        </div>

    )
}

export default Main;