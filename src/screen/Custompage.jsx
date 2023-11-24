import React, { Suspense, useRef } from "react";
import "../css/reset.css";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { Canvas, useThree } from '@react-three/fiber';
import ThreeSpace from '../components/ThreeSpace';
import { OrbitControls } from '@react-three/drei';
import "../css/customspace.css";
import "../css/common.css";
import ColorPicker from "../components/ColorPicker";
import html2canvas from "html2canvas";
import * as THREE from 'three'
import { useRecoilState } from "recoil"
import { SelectCamera } from "../components/state";
// import saveAs from "file-saver";

// const renderer = new THREE.WebGLRenderer();
// renderer.setSize( window.innerWidth, window.innerHeight );
// document.body.appendChild( renderer.domElement );

// export const onCapture = () => {
//   const canvas = document.getElementById("threeCanvas");
//   const grayImg = new Image();
//   grayImg.src = canvas.toDataURL();
  
// }

// export const onCapture = () => {
//   var canvas = document.querySelector("#threeCanvas");
//   renderer.render( scene, SelectCamera );
//   canvas.toBlob((blob) => {
//     saveBlob(blob, `screencapture-${canvas.width}x${canvas.height}.png`);
//   });

// const saveBlob = (function() {
//   const a = document.createElement('a');
//   document.body.appendChild(a);
//   a.style.display = 'none';
//   return function saveData(blob, fileName) {
//      const url = window.URL.createObjectURL(blob);
//      a.href = url;
//      a.download = fileName;
//      a.click();
//   };
// }());
//   };
  // const onSaveAs = (uri, filename) => {
  //   const link = document.createElement('a');
  //   document.body.appendChild(link);
  //   link.href = uri;
  //   link.download = filename;
  //   link.click();
  //   document.body.removeChild(link);
  // }
  //   const { gl, scene, camera } = useThree;
  //   gl.render(scene, camera)
  //   const screenshot = gl.domElement.toDataURL('image/jpg');
  //   onSaveAs(screenshot, 'imgbox.jpg');
    
  // }
// const state = {
//     time: 0,
// };
// function render(){
//     if(resizeRendererToDisplaySize(renderer)){
//         const canvas = renderer.domElement;
//         camera.aspect = canvas.clientWidth / canvas.clientHeight;
//         camera.updateProjectionMatrix();
//     }
//     renderer.render(scene, camera);
// }

// export const readFile = (file: Blob): Promise<string> =>
//   new Promise((resolve) => {
//     const fileReader = new FileReader();
//     fileReader.readAsDataURL(file);
//     fileReader.onload = () => resolve(fileReader.result as string);
//   });

// export const downloadCanvasToImage = (name = "canvas") => {
//   const canvas = document.querySelector("canvas");
//   if (!canvas) return;

//   const dataURL = canvas.toDataURL();
//   const link = document.createElement("a");

//   link.href = dataURL;
//   link.download = `${name}.png`;
//   link.click();
// };






function CustomPage(){

  const canvasRef = useRef();

  const onCapture = () => {
    const canvas = canvasRef.current;
    const dataURL = canvas.toDataURL();
    
    // 이제 dataURL을 저장하거나 사용할 수 있습니다.
    console.log(dataURL);
  };
    return(
        <div className="Page Custompage">
            <Header />
            <div className="content Page_Custom" id="Page_Canvas">
                <div className="Page_Canvas" >
                    <Suspense fallback={null}>
                        <div className="treeCanvas">
                    <Canvas id="threeCanvas" ref={canvasRef}>
                        <ThreeSpace />
                        <OrbitControls />
                    </Canvas>
                    </div>
                    </Suspense>
                </div>
                <div className="Page_under">
                    <ColorPicker />
                    {/* <button className='PartButton_button' onClick={onCapture} id='screenshot'>이미지로 저장하기</button> */}
                </div>
            </div>
            <Footer/>
        </div>

    )
}

export default CustomPage;
