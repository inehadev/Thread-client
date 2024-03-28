import {atom} from "recoil"

const userScreenAtom = atom({
    key:"userAtom",
    default:JSON.parse(localStorage.getItem("x-auht-token"))
})

export  default userScreenAtom;