import React from "react";
import "../css/reset.css";
import "../css/common.css";
import Header from "../components/Header";
import Footer from "../components/Footer";
import ItemList from "../components/ItemList";
import Searchbar from "../components/Searchbar";
import Shoe from '../shoes/shoe_green.png';



function CommunityPage(){
    return(
        <div className="Page">
            <Header />
            <div className="content">
                <Searchbar />
                <ItemList />
            </div>
            <Footer />
        </div>

    )
}

export default CommunityPage;    