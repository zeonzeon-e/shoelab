import React, { useCallback, useEffect, useState, useRef } from 'react';
import { ChromePicker } from 'react-color';
import reactCSS from 'reactcss';
import '../css/customspace.css';
import * as THREE from 'three';
import underRow from '../icon/underRow.png';
import Scene from "./ThreeSpace";

import {RecoilRoot, atom, selector, useRecoilState, useRecoilValue,} from "recoil"
import { colorState_ShoelacesR, 
    colorState_LeatherR, 
    colorState_InnerFabrickR, 
    colorState_ThreadSoleR,
    colorState_MetalLabelR,
    colorState_TongueR,
    colorState_LabelR,
    colorState_InsoleR,
    colorState_SoleR,
    colorState_ShoelacesL, 
    colorState_LeatherL, 
    colorState_InnerFabrickL, 
    colorState_ThreadSoleL,
    colorState_MetalLabelL,
    colorState_TongueL,
    colorState_LabelL,
    colorState_InsoleL,
    colorState_SoleL,
    PartState,
    SelectCamera,
    WholeBool,
    TopBool,
    RightBool,
    FrontBool,
    LeftBool,
    BackBool
} from './state';


// const color_R = 'colorPicker/color_R';
// const color_G = 'colorPicker/color_G';
// const color_B = 'colorPicker/color_B';

// export const colorMaterial_R = () => ({type: color_R});
// export const colorMaterial_G = () => ({type: color_G});
// export const colorMaterial_B = () => ({type: color_B});


function ColorPicker(){
    const [Recoilcolor1, setColor_ShoelacesR] = useRecoilState(colorState_ShoelacesR); //obj로 넘어가는 값
    const [Recoilcolor2, setColor_LeatherR] = useRecoilState(colorState_LeatherR);
    const [Recoilcolor3, setColor_InnerFabrickR] = useRecoilState(colorState_InnerFabrickR);
    const [Recoilcolor4, setColor_ThreadSoleR] = useRecoilState(colorState_ThreadSoleR);
    const [Recoilcolor5, setColor_MetalLabelR] = useRecoilState(colorState_MetalLabelR);
    const [Recoilcolor6, setColor_TongueR] = useRecoilState(colorState_TongueR);
    const [Recoilcolor7, setColor_LabelR] = useRecoilState(colorState_LabelR);
    const [Recoilcolor8, setColor_InsoleR] = useRecoilState(colorState_InsoleR);
    const [Recoilcolor9, setColor_SoleR] = useRecoilState(colorState_SoleR);
    
    const [Recoilcolor10, setColor_ShoelacesL] = useRecoilState(colorState_ShoelacesL);
    const [Recoilcolor11, setColor_LeatherL] = useRecoilState(colorState_LeatherL);
    const [Recoilcolor12, setColor_InnerFabrickL] = useRecoilState(colorState_InnerFabrickL);
    const [Recoilcolor13, setColor_ThreadSoleL] = useRecoilState(colorState_ThreadSoleL);
    const [Recoilcolor14, setColor_MetalLabelL] = useRecoilState(colorState_MetalLabelL);
    const [Recoilcolor15, setColor_TongueL] = useRecoilState(colorState_TongueL);
    const [Recoilcolor16, setColor_LabelL] = useRecoilState(colorState_LabelL);
    const [Recoilcolor17, setColor_InsoleL] = useRecoilState(colorState_InsoleL);
    const [Recoilcolor18, setColor_SoleL] = useRecoilState(colorState_SoleL);

    const [selectColor, setSelectColor] = useState("#000000"); //colorPicker로 정한 값
    const [detail, setDetail] = useState(false); //colorPicker이 열려있나?
    const [buttonPress, setButtonPress] = useState('');
    const [PartValue, SetPartValue] = useRecoilState(PartState);
    const [wayValue, SetWayValue] = useState("");
    const [RecoilCameraValue, setCamera] = useRecoilState(SelectCamera);
    const [wholebool, setWholeBool] = useRecoilState(WholeBool);
    const [topbool, setTopBool] = useRecoilState(TopBool);
    const [rightbool, setRightBool] = useRecoilState(RightBool)
    const [fronbool, setFrontBool] = useRecoilState(FrontBool);
    const [leftbool, setLeftBool] = useRecoilState(LeftBool);
    const [backbool, setBackBool] = useRecoilState(BackBool);

    const [showCameraOptions, setShowCameraOptions] = useState(false);
    const [showPartOption, setShowPartOption] = useState(false);
    
    const [errorMessage, setErrorMessage] = useState("");


    const handleChange = (color) => {
            this.setState({ color: color.rgb })
    };
    // let Colormaterial = new THREE.MeshLambertMaterial({color : "0x" + `${color}`})
    //on/off 개념
    const ColorPickerButton = () => {
        setDetail(detail => !detail);
    }
    const CameraChange = value => {
        setCamera(value);
        console.log(value);
        if(value === 'WholeCamera'){
            setWholeBool(true);
            setTopBool(false);
            setRightBool(false);
            setLeftBool(false);
            setFrontBool(false);
            setBackBool(false);
        }
        if(value === 'TopCamera'){
            setWholeBool(false);
            setTopBool(true);
            setRightBool(false);
            setLeftBool(false);
            setFrontBool(false);
            setBackBool(false);
        }
        if(value === 'RightCamera'){
            setWholeBool(false);
            setTopBool(false);
            setRightBool(true);
            setLeftBool(false);
            setFrontBool(false);
            setBackBool(false);
        }
        if(value === 'LeftCamera'){
            setWholeBool(false);
            setTopBool(false);
            setRightBool(false);
            setLeftBool(true);
            setFrontBool(false);
            setBackBool(false);
        }
        if(value === 'FrontCamera'){
            setWholeBool(false);
            setTopBool(false);
            setRightBool(false);
            setLeftBool(false);
            setFrontBool(true);
            setBackBool(false);
        }
        if(value === 'BackCamera'){
            setWholeBool(false);
            setTopBool(false);
            setRightBool(false);
            setLeftBool(false);
            setFrontBool(false);
            setBackBool(true);
        }
        setShowCameraOptions(showCameraOptions => !showCameraOptions)
    }


    const PartChange = value => {
        if(buttonPress === ''){
            setErrorMessage('왼쪽/오른쪽을 선택해주세요!')
        }
        SetPartValue(value);
        console.log(value);
        setShowPartOption(showPartOptions => !showPartOptions)
    }

    const WayChange = bool => {
        const Part = PartValue.slice(0, -1);
        setButtonPress(bool);
        if(bool === true){
            SetWayValue("L");
            if(PartValue === Part+"L"){
                SetPartValue(PartValue);
            }else if(PartValue === Part+"R"){
                PartValue.slice(0, -1);
                SetPartValue(Part+"L");
            }else{
                SetPartValue(PartValue+"L");
            }
            
        }else if(bool === false){
            SetWayValue("R");
            if(PartValue === Part+"R"){
                SetPartValue(PartValue);
            }else if(PartValue === Part+"L"){
                PartValue.slice(0, -1);
                SetPartValue(Part+"R");
            }else{
                SetPartValue(PartValue+"R");
            }
        }
        setErrorMessage('')

    }


    const handleColorChange = (color) => {
        setSelectColor(color);
        if(PartValue === 'ShoelacesR'){setColor_ShoelacesR(color);}
        if(PartValue === 'LeatherR'){setColor_LeatherR(color);}
        if(PartValue === 'InnerFabrickR'){setColor_InnerFabrickR(color);}
        if(PartValue === 'ThreadSoleR'){setColor_ThreadSoleR(color);}
        if(PartValue === 'MetalLabelR'){setColor_MetalLabelR(color);}
        if(PartValue === 'TongueR'){setColor_TongueR(color);}
        if(PartValue === 'LabelR'){setColor_LabelR(color);}
        if(PartValue === 'InsoleR'){setColor_InsoleR(color);}
        if(PartValue === 'SoleR'){setColor_SoleR(color);}
        if(PartValue === 'ShoelacesL'){setColor_ShoelacesL(color);}
        if(PartValue === 'LeatherL'){setColor_LeatherL(color);}
        if(PartValue === 'InnerFabrickL'){setColor_InnerFabrickL(color);}
        if(PartValue === 'ThreadSoleL'){setColor_ThreadSoleL(color);}
        if(PartValue === 'MetalLabelL'){setColor_MetalLabelL(color);}
        if(PartValue === 'TongueL'){setColor_TongueL(color);}
        if(PartValue === 'LabelL'){setColor_LabelL(color);}
        if(PartValue === 'InsoleL'){setColor_InsoleL(color);}
        if(PartValue === 'SoleL'){setColor_SoleL(color);}
    }

    // const onCapture = () => {
    //     document.body.appendChild(renderer.domElement);
    //     var camera = RecoilCameraValue;
    //     var scene = Scene;
    //     var w = window.open('', '');
    //     w.document.title = "Screenshot";
    //     var img = new Image();
    //     renderer.render(scene, camera);
    //     img.src = renderer.domElement.toDataURL();
    //     w.document.body.appendChild(img);
      
    // }

    return(
        <div>
        <div className='SpaceTool'>
            <div className='PartButton_button dropdown_div'>
            <button className='dropdown' onClick={() => setShowCameraOptions(showCameraOptions => !showCameraOptions)}>
                <p className='dropdown_p'>{RecoilCameraValue}</p><img className="masterDiv_profile" src={underRow} width="20px" />
            </button>
            {showCameraOptions &&
                <div className='dropdown_list'>
                <button value='WholeCamera' className="dropdown_list_btn" onClick={() => CameraChange('WholeCamera')} >Whole Camera</button>
                <button value="FrontCamera" className="dropdown_list_btn" onClick={e => CameraChange(e.target.value)} >Front Camera</button>
                <button value="RightCamera" className="dropdown_list_btn" onClick={e => CameraChange(e.target.value)} >Right Camera</button>
                <button value="LeftCamera" className="dropdown_list_btn" onClick={e => CameraChange(e.target.value)} >Left Camera</button>
                <button value="BackCamera" className="dropdown_list_btn" onClick={e => CameraChange(e.target.value)} >Back Camera</button>
                <button value="TopCamera" className="dropdown_list_btn" onClick={e => CameraChange(e.target.value)} >Top Camera</button>
                </div>
            }
            </div>
            
                {/* <RadioGroup label="part" value={PartValue} onChange={SetPartValue}></RadioGroup>
                    <Radio className='PartButton_button btn_Shoelaces'>Shoelaces</Radio> */}
                {/* <input value="Shol" name="part" onClick={() => PartChange} className='PartButton_button btn_Shoelaces'>Shoelaces</input> */}
            <div className='PartButton_div'>
            <button value="L" onClick={() => WayChange(true)} className={ buttonPress === true ? 'PartButton_button btn_Shoelaces btnPress' : 'PartButton_button btn_Shoelaces' }>Left</button>
            <button value="R" onClick={() => WayChange(false)} className={ buttonPress === false ? 'PartButton_button btn_Sole btnPress' : 'PartButton_button btn_Sole'}>Right</button>
            </div>
            <div className='PartButton_button dropdown_div'>
            <button className='dropdown' onClick={() => setShowPartOption(showPartOptions => !showPartOptions)}>
                <p className='dropdown_p'>{PartValue}</p><img className="masterDiv_profile" src={underRow} width="20px" />
            </button>
            {showPartOption &&
            <div className='dropdown_list'>
                <button value={"Shoelaces" + wayValue} className="dropdown_list_btn" onClick={e => PartChange(e.target.value)} >Shoelaces</button>
                <button value={'Leather' + wayValue} className="dropdown_list_btn" onClick={e => PartChange(e.target.value)} >Leather</button>
                <button value={'InnerFabrick' + wayValue} className="dropdown_list_btn" onClick={e => PartChange(e.target.value)} >Inner_Fabrick</button>
                <button value={'ThreadSole' + wayValue} className="dropdown_list_btn" onClick={e => PartChange(e.target.value)} >Thread_Sole</button>
                <button value={'MetalLabel' + wayValue} className="dropdown_list_btn" onClick={e => PartChange(e.target.value)} >Metal_Label</button>
                <button value={'Tongue' + wayValue} className="dropdown_list_btn" onClick={e => PartChange(e.target.value)} >Tongue</button>
                <button value={'Label'+wayValue} className="dropdown_list_btn" onClick={e => PartChange(e.target.value)} >Label</button>
                <button value={'Insole'+wayValue} className="dropdown_list_btn" onClick={e => PartChange(e.target.value)} >Insole</button>
                <button value={'Sole'+wayValue} className="dropdown_list_btn" onClick={e => PartChange(e.target.value)} >Sole</button>
                </div>
            }
            </div>
            

            <div className='ColorPicker'>
                {/* <input className='ColorPicker_input' value={selectColor} onChange={e => (handleColorChange(e.target.value), handleChange)} /> */}
                <div style={{width:"120px", height:"40px", border:"1px solid white", marginRight:'5px',backgroundColor:`${selectColor}`, borderRadius:"5px"}}></div>
                <button className='ColorPicker_button' onClick={() => ColorPickerButton()}>{detail ? "닫기" : "색 고르기"}</button>
                {detail && 
                    <ChromePicker className="ColorPicker_picker_Open" color={selectColor} onChange={color => (handleColorChange(color.hex), handleChange)}/>
                }
            </div>
        </div>
        <div>
            <p className='errorMaessage_p'>{errorMessage}</p>
        </div>
        </div>
    )
}
export default ColorPicker;