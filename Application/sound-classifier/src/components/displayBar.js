import React, { useEffect, useState } from 'react';
import ReactDOM from 'react-dom/client';
import { motion, AnimatePresence, useMotionValue, useTransform, animate, useIsPresent } from "framer-motion";
import { createRoot } from 'react-dom/client';

function DisplayControlContainer({displayingCategories, setCategories, id, categoryName}){

    return (
            <DisplayBar displayingCategories={displayingCategories} categoryName={categoryName} setCategories={setCategories} id={id}/>
        )
}

function DisplayBar({setCategories, id, categoryName, displayingCategories}){
    console.log("display bar")
    console.log(categoryName)
    const styleLeft={
        marginRight:"auto", marginLeft:"3vmin", color:"#001F54", fontSize:"2vmin"
    }

    return (
        <div className={categoryName} style={styleLeft}
        onClick={()=>{
            let temp = displayingCategories
            temp[id] = !temp[id]
            setCategories(temp) 
        }}>
            {categoryName}
        </div>
    )
}

export default DisplayControlContainer