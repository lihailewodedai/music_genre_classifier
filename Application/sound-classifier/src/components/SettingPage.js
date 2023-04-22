import React, { useEffect, useState } from 'react';
import ReactDOM from 'react-dom/client';
import { motion, AnimatePresence, useMotionValue, useTransform, animate, useIsPresent } from "framer-motion";
import { createRoot } from 'react-dom/client';

function SettingPageContainer({setDisplay, display}) {

    return (
            <>
            {display && < SettingPage />}
            </>
    )
}

function SettingPage(){
    const outer = {
        position: "fixed",
        top:"0",
        left:"0",
        width:"100%",
        height:"100vh",
        backgroundColor: "rgba(0,0,0, 0.2)",

        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
    }

    const inner = {
        position: "relative",
        borderStyle: "solid",
        borderWidth: "0px",
        borderRadius:"1vmin",
        marginTop:"4%",
        height:"62%",
        width:"32%",
        backgroundColor:""
    }

    return (
        <motion.div className='SettingPage' style={outer} key={"rgba(0,0,0, 0.2)"}
            initial={{ opacity:0 }}
            animate={{ opacity:1 }}
            transition={{ type:"tween", duration:0.5}}
        >
            <div className='SettingPage-inner' style={inner} >
                something
            </div>
        </motion.div>
    )
}

export default SettingPageContainer