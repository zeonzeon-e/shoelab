import {
    RecoilRoot,
    atom,
    selector,
    useRecoilState,
    useRecoilValue,
} from "recoil"

const colorState = atom({
    key: "color",
    default: 0
});

const PartState = atom({
    key: "ShoePart",
    default: ''
})

export { colorState, PartState}