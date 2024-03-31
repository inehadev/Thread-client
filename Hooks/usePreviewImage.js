import React, { useState } from "react";

 const usePreviewImage =()=>{
    const [imageurl , setimageurl]=useState("");
    const handleImageChange = (e) =>{
        e.preventDefault();
        const file = e.target.files[0];
        if(file && file.type.startsWith("image")){
            const reader = new FileReader();
            reader.onloadend=()=>{
                setimageurl(reader.result)
            }

            reader.readAsDataURL(file);
        }else{
            console.log("Invalid File Type");
            setimageurl("")
        }
        console.log(imageurl);

    }
    return{handleImageChange , imageurl}
}
export  default usePreviewImage;
