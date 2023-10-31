import React from "react";
import "../css/reset.css";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Spline from '@splinetool/react-spline';


function CustomPage(){
    return(
        <div className="Page">
            <Header />
            <div className="content">
            <Spline scene="https://prod.spline.design/GuObGflEm9MJeK2h/scene.splinecode" />
            </div>
            <Footer />
        </div>

    )
}

export default CustomPage;