import React, { useCallback, useEffect, useState } from 'react';
import { ChromePicker } from 'react-color';
import reactCSS from 'reactcss';
import '../css/customspace.css';
import * as THREE from 'three';
import {
    RecoilRoot,
    atom,
    selector,
    useRecoilState,
    useRecoilValue,
} from "recoil"
import { colorState } from './state';

// const color_R = 'colorPicker/color_R';
// const color_G = 'colorPicker/color_G';
// const color_B = 'colorPicker/color_B';

// export const colorMaterial_R = () => ({type: color_R});
// export const colorMaterial_G = () => ({type: color_G});
// export const colorMaterial_B = () => ({type: color_B});


function ColorPicker(){
    const [Recoilcolor, setColor] = useRecoilState(colorState);
    const [selectColor, setSelectColor] = useState("#000000");
    const [detail, setDetail] = useState(false);
    const handleChange = (color) => {
        this.setState({ color: color.rgb })
    };
    // let Colormaterial = new THREE.MeshLambertMaterial({color : "0x" + `${color}`})
    //on/off 개념
    const toggleButton = () => {
        setDetail(detail => !detail);
    }

    const handleColorChange = color => {
        setSelectColor(color);
        console.log(color);
        setColor(color);
        
    }

    return(
        <div className='ColorPicker'>
            <input className='ColorPicker_input' value={selectColor} onChange={e => (handleColorChange(e.target.value), handleChange)} />
            <div style={{width:"5vw", height:"30px", backgroundColor:`${selectColor}`, borderRadius:"5px"}}></div>
            <button className='ColorPicker_button' onClick={() => toggleButton()}>{detail ? "닫기" : "더보기"}</button>
            {detail && 
                <ChromePicker className="ColorPicker_picker_Open" color={selectColor} onChange={color => handleColorChange(color.hex)}/>
            }
        </div>
    )
}
export default ColorPicker;