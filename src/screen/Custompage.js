import React, { Suspense, useRef } from "react";
import "../css/reset.css";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Spline from '@splinetool/react-spline';
import Space from '../components/Space';
import { Canvas } from '@react-three/fiber';
import ThreeSpace from '../components/ThreeSpace';
import { OrbitControls } from '@react-three/drei';
import "../css/customspace.css";
import SpaceFunction from '../components/SpaceFunction';
import ColorPicker from "../components/ColorPicker";


function CustomPage(){
    const color = 0xffffff;
const intensity = 1;
    const ChangeMaterial = useRef(Space.Material);
    return(
        <div className="Page">
            <Header />
            <div>
            {/* <Suspense fallback={null}>
            <Canvas shadows flat linear>
                <Space />
                <OrbitControls />
            </Canvas>
            
            </Suspense> */}
            {/* <SpaceFunction /> */}
            <Suspense fallback={null}>
            <Canvas className="treeCanvas">
                <ThreeSpace />
                <OrbitControls />
            </Canvas>
            </Suspense>
            </div>
            <div className="Page_under">
                <ColorPicker />
            </div>
            <Footer />
        </div>

    )
}

export default CustomPage;
