import React, { useState } from "react";
import MyContext from "./MyContext";

const MyContextProvider =({children})=>{
    const [rotator, setRotator] = useState(0);
    const [Opacity, setOpacity] = useState(false);
    const [MobileScreen, setMobileScreen] = useState(false)
    const [divSize, setdivSize] = useState(false)
    // const [borderRadius, setBorderRadius] = useState('0.5rem');
    const fixedRatio1 = 0.618033;
    const padding = .3;
   
    return(
        <MyContext.Provider
        value={{
            padding,
            rotator,
            fixedRatio1,
            MobileScreen,
            Opacity,
            divSize,
            setdivSize,
            setMobileScreen,
            setRotator,
            setOpacity,
        }}
        >
            {children}
        </MyContext.Provider>
    )

}
export default MyContextProvider;