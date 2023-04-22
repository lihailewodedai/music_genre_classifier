import React, { useEffect, useState } from 'react';
import ReactDOM from 'react-dom/client';
import { motion, AnimatePresence, useMotionValue, useTransform, animate, useIsPresent } from "framer-motion";
import { createRoot } from 'react-dom/client';

function ListenerSwitch({listenerOn, setListener}) {

    const [text, setText] = useState("Stop")

    useEffect(() =>{
        if(listenerOn) {
            setText("Stop")
        } else {
            setText("Start")
        }
    })

    const listenerSwitchStyle = {
        borderStyle:"solid",
        borderWidth:"0.1vmin",
        borderRadius:"1vmin",
        marginTop:"9%",
        width:"50%",
        marginLeft:"25%",
        minHeight:"6vmin",
        backgroundColor:"white",
        boxShadow:"0px 3px 5px -1px rgba(166,166,166,1)",
        fontSize:"3vmin",

        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
    }


    return (
        <>
            <div style={listenerSwitchStyle} key={"listenerSwitch"}
                onClick={() => {
                    setListener(!listenerOn)
                }}
            >
                {text}
            </div>
        </>
    )
}

export default ListenerSwitch