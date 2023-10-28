import React from "react";
import "../css/reset.css";
import "../css/footer.css";
import "../css/components.css";
import Shoe from '../shoes/shoe_green.png';
import Item from "./Item";
import { Link } from "react-router-dom";

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
    {
        id: 7,
        img: Shoe
    },


]

const item_img = (arr) => {
    const result = [];
    for (let i = 0; i < arr.length; i++){
        result.push(
        <Link to={'/community/detail'}>
        <button className="item_img" key={arr.id}>
            <p>{arr[i].id}</p><img src={arr[i].img}/>
        </button></Link>);
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