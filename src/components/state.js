import {
    RecoilRoot,
    atom,
    selector,
    useRecoilState,
    useRecoilValue,
} from "recoil"

const colorState_ShoelacesR = atom({
    key: "color1",
    default:'0'
});
const colorState_LeatherR = atom({
    key: "color2",
    default:'0'
});
const colorState_InnerFabrickR = atom({
    key: "color3",
    default:'0'
});
const colorState_ThreadSoleR = atom({
    key: "color4",
    default:'0'
});
const colorState_MetalLabelR = atom({
    key: "color5",
    default:'0'
});
const colorState_TongueR = atom({
    key: "color6",
    default:'0'
});
const colorState_LabelR = atom({
    key: "color7",
    default:'0'
});
const colorState_InsoleR = atom({
    key: "color8",
    default:'0'
});
const colorState_SoleR = atom({
    key: "color9",
    default:'0'
});
const colorState_ShoelacesL = atom({
    key: "color10",
    default:'0'
});
const colorState_LeatherL = atom({
    key: "color11",
    default:'0'
});
const colorState_InnerFabrickL = atom({
    key: "color12",
    default:'0'
});
const colorState_ThreadSoleL = atom({
    key: "color13",
    default:'0'
});
const colorState_MetalLabelL = atom({
    key: "color14",
    default:'0'
});
const colorState_TongueL = atom({
    key: "color15",
    default:'0'
});
const colorState_LabelL = atom({
    key: "color16",
    default:'0'
});
const colorState_InsoleL = atom({
    key: "color17",
    default:'0'
});
const colorState_SoleL = atom({
    key: "color18",
    default:'0'
});
const PartState = atom({
    key: "ShoePart",
    default: 'Select Part'
})

const SelectCamera = atom({
    key: "Camera",
    default: 'FrontCamera'
})

const WholeBool = atom({
    key: 'whole',
    default: 'true'
})

const TopBool = atom({
    key: 'top',
    default: 'false'
})

const FrontBool = atom({
    key: 'front',
    default: 'false'
})

const RightBool = atom({
    key: 'right',
    default: 'false'
})
const LeftBool = atom({
    key: 'left',
    default: 'false'
})
const BackBool = atom({
    key: 'back',
    default: 'false'
})


export { colorState_ShoelacesR, 
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
}