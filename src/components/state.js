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

export { colorState}