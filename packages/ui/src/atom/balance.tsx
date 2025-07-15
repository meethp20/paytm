import { atom } from "recoil";

export default balanceAtom= atom<number>({
    key:"balance",
    default:0 ,
})