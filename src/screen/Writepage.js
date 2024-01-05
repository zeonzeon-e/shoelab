import React, { useState } from "react";
import "../css/reset.css";
import "../css/write.css";
import Header from "../components/Header";
import Footer from "../components/Footer";
import API from '../server/utils/API';

function WritePage(){
    const [title, setTitle] = useState('');
    const [content, setContent] = useState('');
    const [id, setId] = useState('');
    const [username, setUsername] = useState('');
    const [imageSrc, setImageSrc] = useState(null);
    
    const setImg = (e) => {
        var reader = new FileReader();
        reader.onload = function(e){
            setImageSrc(e.target.result)};
        reader.readAsDataURL(e.target.files[0]);
        console.log(e.target.files[0]);
    }

    let handleInputSubmit = (e) => {
      console.log(title);
      console.log(content);
    }
    let handleTitleChange = (e) => {
        setTitle(e.target.value);
    }
    let handleContentChange = (e) => {
        setContent(e.target.value);
    }

    const postData = {
        userName: username,
        userId: id,
        title: title,
        content: content,
    };
    const jsonData = JSON.stringify(postData);
    const createPost = async(e) => {
        e.preventDefault();
        API.post("/board/write",jsonData)
        .then(res => {
            console.log(res);
            // console.log(res.data)
            console.log(res.data.result);
            if(res.data.result === 'ok'){
                alert("게시물 등록이 완료되었습니다");
                // window.location.href = '/board';
            }else{
                throw new Error(res.error);
            }
        })
    }
    
    return(
        <div className="Page">
            <Header />
            <div className="content">
                
                <div className="writediv">
                <div className="writediv_img">
                    <img alt="사진을 업로드해주세요" src={imageSrc} style={{maxWidth:"200px", fontSize:"1.8rem"}} />
                </div>
                <div className="writediv_write">
                <form action="http://localhost:3001/board/uploadPhoto" encType="multipart/form-data" method="POST">
                    <div className="writediv_box">
                    제목 <input className="writediv_title" name="title" value={title} onChange={handleTitleChange}></input>
                    </div>
                    <div className="writediv_box">
                        이미지 첨부하기 <input className="inputImg" type="file" name="uploadImg" accept="image/*" onChange={setImg}></input>
                        {/* <input type="submit" value="이미지 업로드"></input> */}
                    </div>
                    <div className="writediv_box">
                    내용<br/><input className="writediv_content" name="content" value={content} onChange={handleContentChange}></input>
                    </div>
                    <input onClick={() =>window.location.href = '/board' } type="submit" className="writediv_submit" value="글 업로드하기"></input>
                    </form>
                </div>
                

                    
                </div>
                
            </div>
            <Footer />
        </div>

    )
}

export default WritePage;