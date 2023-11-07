import Spline from '@splinetool/react-spline';
import { React, useRef } from 'react';
import '../css/common.css';
import '../css/customspace.css';

function SpaceFunction() {
    const roof = useRef();

    function onLoad(spline) {
        const obj = spline.findObjectByName('Nike_Air_Force_1_Set_White:Shoelaces_L1');
        roof.current = obj;
        console.log(roof.current);
    }


    function changeObj(){
        console.log(roof.current);
        roof.current.position.x += 10;
        
    }

    return (
        <div>
            <div className='threeSpace'>
            <Spline scene="https://prod.spline.design/CXn8xUxZDVxWpuRy/scene.splinecode" onLoad={onLoad}/>
            </div>
            
            <button onClick={changeObj}>Color change</button>
        </div>
    );
}

export default SpaceFunction;