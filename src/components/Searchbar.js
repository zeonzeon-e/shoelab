import React from "react";
import "../css/reset.css";
import "../css/footer.css";
import "../css/components.css";

function Searchbar(){
    return(
        <div className="Searchbar">
            <input type="text" className="Searchbar_input"></input>
            <button className="Searchbar_btn">검색</button>
        </div>
    )
}

export default Searchbar;