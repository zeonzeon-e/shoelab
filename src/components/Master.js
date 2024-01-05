import React, { useState } from "react";
import "../css/reset.css";
import "../css/footer.css";
import "../css/components.css";
import Shoe1 from '../shoes/shoes2.png';
import Shoe2 from '../shoes/shoes1.png'
import profile from '../icon/profile.png';


function Master(){
    const masterList = [
        {
            masterID: 1,
            masterName: "ArtHong",
            profileImg: profile,
            img: Shoe1
        },
        {
            masterID: 2,
            masterName: "alice",
            profileImg: profile,
            img: Shoe2
        },
    ]
    

    return(
        <div>
            <div>
                {masterList.map((it)=>(
                    <div className="master_div">
                        <div className="master_div-detail">
                            <div>
                            <img className="masterDiv_profile" src={it.profileImg} width="200vw" />
                            <p className="masterDiv_name">{it.masterName}</p>
                            </div>

                            <div>
                            <button onClick={(e) => window.location.assign("/order/detail")}>프로필 보러가기</button>
                            <button className="masterDiv_chatBtn">1:1 채팅하러가기</button>
                            </div>
                        </div>
                        <div className="master_div-img">
                            <img src={it.img} />
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )    
}


export default Master;