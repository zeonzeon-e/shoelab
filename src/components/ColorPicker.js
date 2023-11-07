import React, { useCallback, useEffect, useState } from 'react';
import { ChromePicker } from 'react-color';
import reactCSS from 'reactcss';
import '../css/customspace.css';

function ColorPicker(){
    const [color, setColor] = useState('#000000');
    const [detail, setDetail] = useState(false);
const handleChange = (color) => {
    this.setState({ color: color.rgb })
  };

    //on/off 개념
    const toggleButton = () => {
        setDetail(detail => !detail);
    }

    const handleColorChange = color => {
        setColor(color);
    }


    return(
        <div className='ColorPicker'>
            <input className='ColorPicker_input' value={color} onChange={e => (handleColorChange(e.target.value), handleChange)} />
            <div style={{width:"5vw", height:"30px", backgroundColor:`${color}`, borderRadius:"5px"}}></div>
            <button className='ColorPicker_button' onClick={() => toggleButton()}>{detail ? "닫기" : "더보기"}</button>
            {detail && 
                <ChromePicker className="ColorPicker_picker_Open" color={color} onChange={color => handleColorChange(color.hex)}/>
            }
        </div>
        
    )
}

export default ColorPicker;