

import { atom } from "recoil";
const storedToken = localStorage.getItem("x-auht-token");



const userScreenAtom = atom({
    key: "userAtom",
    default:JSON.parse(localStorage.getItem("x-auht-token"))
});



export default userScreenAtom;
