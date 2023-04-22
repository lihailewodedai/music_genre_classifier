import React, { useEffect, useState } from 'react';
import ReactDOM from 'react-dom/client';
import { motion, AnimatePresence, useMotionValue, useTransform, useIsPresent } from "framer-motion";
import { createRoot } from 'react-dom/client';

function RecognizerListener({seconds, setSeconds, scores, setScores, listenerOn}) {
    useEffect(() => {
        let result = [0,0,0,0,0,0]
        if (listenerOn){
            const childs = document.getElementById("label-container").childNodes;
            result = []
            for (const child of childs) {
                // eslint-disable-next-line no-restricted-globals
                const score = parseFloat(child.innerHTML.substring(child.innerHTML.length-3, child.innerHTML.length))
                result.push(score)
            }
        }
        const intervalId = setInterval(() => setScores(result), 1000);
        return () => clearInterval(intervalId);    
    }, [scores, listenerOn])

    return (
        <></>
    )

}

export default RecognizerListener