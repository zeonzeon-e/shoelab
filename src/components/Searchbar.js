import React from "react";
import "../css/reset.css";
import "../css/footer.css";
import "../css/components.css";
import { Link } from "react-router-dom";

function Searchbar(){
    return(
        <div className="Searchbar">
            <input type="text" className="Searchbar_input"></input>
            <button className="Searchbar_btn">검색</button>
            <Link to ='/write'>
            <button className="Searchbar_btn">글쓰기</button>
            </Link>
        </div>
    )
}

export default Searchbar;