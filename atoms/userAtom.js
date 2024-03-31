
import { atom } from "recoil";
const storedToken = localStorage.getItem("x-auth-token");
console.log("Stored Token:", storedToken);



const userScreenAtom = atom({

    key: "userAtom",
    default:JSON.parse
    (storedToken) || null,
});



export default userScreenAtom;