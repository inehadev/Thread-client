
import { atom } from "recoil";
const storedToken = localStorage.getItem("x-auth-token");
console.log("Stored Token:", storedToken);



const userScreenAtom = atom({

    key: "userAtom",
    default:(storedToken) || null,
});



export default userScreenAtom;