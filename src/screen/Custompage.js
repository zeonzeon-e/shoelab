import React, { Suspense } from "react";
import "../css/reset.css";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Spline from '@splinetool/react-spline';
import Space from '../components/Space';
import { Canvas } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';
import "../css/customspace.css";


function CustomPage(){
    return(
        <div className="Page">
            <Header />
            <div className="threeSpace">
            <Suspense fallback={null}>
            <Canvas shadows flat linear>
                <Space />
                <OrbitControls />
            </Canvas>
            </Suspense>
            </div>
            <Footer />
        </div>

    )
}

export default CustomPage;
