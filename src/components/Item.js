import React from "react";
import "../css/reset.css";
import "../css/footer.css";
import Shoe from '../shoes/shoe_green.png';

function Item({id, img}){
    return (
        <div>
            {id} <br/>
            <img src={img}/>
        </div>
    )
}


export default Item;