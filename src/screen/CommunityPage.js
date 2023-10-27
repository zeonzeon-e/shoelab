import React from "react";
import "../css/reset.css";
import "../css/common.css";
import Header from "../components/Header";
import Footer from "../components/Footer";
import ItemList from "../components/ItemList";
import Searchbar from "../components/Searchbar";
import Shoe from '../shoes/shoe_green.png';


const itemList = [
    {
        id: 1,
        img: Shoe
    },
    {
        id: 2,
        img: Shoe
    },
    {
        id: 3,
        img: Shoe
    },
    {
        id: 4,
        img: Shoe
    },
    {
        id: 5,
        img: Shoe
    },
    {
        id: 6,
        img: Shoe
    },

]


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