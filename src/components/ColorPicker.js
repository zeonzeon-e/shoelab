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
import { colorState, PartState } from './state';

// const color_R = 'colorPicker/color_R';
// const color_G = 'colorPicker/color_G';
// const color_B = 'colorPicker/color_B';

// export const colorMaterial_R = () => ({type: color_R});
// export const colorMaterial_G = () => ({type: color_G});
// export const colorMaterial_B = () => ({type: color_B});


function ColorPicker(){
    const [Recoilcolor, setColor] = useRecoilState(colorState); //obj로 넘어가는 값
    const [selectColor, setSelectColor] = useState("#000000"); //colorPicker로 정한 값
    const [detail, setDetail] = useState(false); //colorPicker이 열려있나?
    const [PartValue, SetPartValue] = useRecoilState(PartState);
    const handleChange = (color) => {
        this.setState({ color: color.rgb })
    };
    // let Colormaterial = new THREE.MeshLambertMaterial({color : "0x" + `${color}`})
    //on/off 개념
    const ColorPickerButton = () => {
        setDetail(detail => !detail);
    }

    const PartChange = value => {
        SetPartValue(value);
    }

    const handleColorChange = color => {
        setSelectColor(color);
        console.log(color);
        setColor(color);
    }

    return(
        <div>
            <div className='PartButton_div'>
                {/* <RadioGroup label="part" value={PartValue} onChange={SetPartValue}></RadioGroup>
                    <Radio className='PartButton_button btn_Shoelaces'>Shoelaces</Radio> */}
                {/* <input value="Shol" name="part" onClick={() => PartChange} className='PartButton_button btn_Shoelaces'>Shoelaces</input> */}
                <button value="Shoelaces" onClick={e => PartChange(e.target.value)} className='PartButton_button btn_Shoelaces'>Shoelaces</button>
                <button value='Leather' onClick={e => PartChange(e.target.value)} className='PartButton_button'>Leather</button>
                <button value='Inner_Fabrick' onClick={e => PartChange(e.target.value)} className='PartButton_button'>Inner_Fabrick</button>
                <button value='Thread_Sole' onClick={e => PartChange(e.target.value)} className='PartButton_button'>Thread_Sole</button>
                <button value='Metal_Label' onClick={e => PartChange(e.target.value)} className='PartButton_button'>Metal_Label</button>
                <button value='Tongue' onClick={e => PartChange(e.target.value)} className='PartButton_button'>Tongue</button>
                <button value='Label' onClick={e => PartChange(e.target.value)} className='PartButton_button'>Label</button>
                <button value='Insole' onClick={e => PartChange(e.target.value)} className='PartButton_button'>Insole</button>
                <button value='Sole' onClick={e => PartChange(e.target.value)} className='PartButton_button btn_Sole'>Sole</button>
            </div>
            <div className='ColorPicker'>
                <input className='ColorPicker_input' value={selectColor} onChange={e => (handleColorChange(e.target.value), handleChange)} />
                <div style={{width:"80px", height:"40px", backgroundColor:`${selectColor}`, borderRadius:"5px"}}></div>
                <button className='ColorPicker_button' onClick={() => ColorPickerButton()}>{detail ? "닫기" : "더보기"}</button>
                {detail && 
                    <ChromePicker className="ColorPicker_picker_Open" color={selectColor} onChange={color => handleColorChange(color.hex)}/>
                }
            </div>
            
        </div>
    )
}
export default ColorPicker;