import React, { useEffect, useState } from "react";
import "../css/reset.css";
import "../css/footer.css";
import "../css/components.css";
import Shoe from '../shoes/shoe_green.png';
import Heart_icon from "../icon/Heart.png";
import Download_icon from "../icon/Download.png";
import API from '../server/utils/API';

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
    const [data, setData] = useState([]);

    const getBoardList = async()=>{
        API.get('/board').then(
        res =>{
            // const Info = res.data.results.map((boards) => {
            //     return {
            //         title: boards.title,
            //         content: boards.content,
            //     }
            // })
            console.log(res.data);
            const Info = res.data.map(it=> {
                return{
                    title: it.title,
                    content: it.content,
                    imageURL: it.imageURL
                }
            })
            setData(Info);
            console.log(data);
            // res.data.map(it => {
            //     return {
            //         title: it.title,
            //     }
            // })
        }
        )}
    useEffect(()=>{
        getBoardList();
    },[])
    return(
        <div className="ItemList_div">
            {/* {item_img(itemList)} */}
            {/* <div>`${data}`</div> */}
                {data && data.map((board)=> (
                    <button className="item_box" id="item_box">
                    <img src={board.imageURL}/>
                    <div className="item_box-text" onClick={(e) => {e.stopPropagation();}}>
                        <p className="itemBox_p">{board.title}</p>
                        <p className="itemBox_p"></p>
                        <div className="icon_div">
                            <HeartBtn />
                            <DownloadBtn />
                        </div>                
                    </div>
                    </button>
                ))}
        </div>
    )    
    
}


export default ItemList;