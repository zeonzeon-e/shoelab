import React, { useState } from "react";
import "../css/reset.css";
import "../css/footer.css";
import "../css/components.css";
import Shoe from '../shoes/shoe_green.png';
import Heart_icon from "../icon/Heart.png";
import Download_icon from "../icon/Download.png";

const itemList = [
    {
        title: 1,
        userName: "jihyeon",
        img: Shoe
    },
    {
        title: 2,
        userName: "jihyeon",
        img: Shoe
    },
    {
        title: 3,
        userName: "jihyeon",
        img: Shoe
    },
    {
        title: 4,
        userName: "jihyeon",
        img: Shoe
    },
    {
        title: 5,
        userName: "jihyeon",
        img: Shoe
    },
    {
        title: 6,
        userName: "jihyeon",
        img: Shoe
    },
    {
        title: 7,
        userName: "jihyeon",
        img: Shoe
    },
]

//heart icon ClickEvnet
function HeartBtn(){
    const [clicked, setClicked] = useState(false);
    return (
        <button onClick={() => setClicked(!clicked)} className={"Heart_icon" + (clicked ? " active" : "")}>
        <img src={Heart_icon} width="30vw" />
        </button>
    )
}

//heart icon ClickEvnet
function DownloadBtn(){
    const [clicked, setClicked] = useState(false);
    return (
        <button onClick={() => setClicked(!clicked)} className={"Download_icon" + (clicked ? " active" : "")}>
        <img src={Download_icon} width="30vw" />
        </button>
    )
}

const item_img = (arr) => {
    const result = [];
    for (let i = 0; i < arr.length; i++){
        result.push(
        // <Link to={'/community/detail'}>
        <button className="item_box" id="item_box" key={arr.id} onClick={() => window.location.assign("/community/detail")}>
            <img src={arr[i].img}/>
            <div className="item_box-text" onClick={(e) => {e.stopPropagation();}}>
                <p className="itemBox_p">{arr[i].title}</p>
                <p className="itemBox_p">{arr[i].userName}</p>
                <div className="icon_div">
                    <HeartBtn />
                    <DownloadBtn />
                </div>                
            </div>
        </button>
    
        
        );
    }
    return result;
}


function ItemList(){

    return(
        <div className="ItemList_div">
            {item_img(itemList)}
        </div>
    )    
    
}


export default ItemList;