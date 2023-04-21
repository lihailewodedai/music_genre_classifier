import React, { useEffect, useState } from 'react';
import ReactDOM from 'react-dom/client';
import { motion, AnimatePresence, useMotionValue, useTransform, useIsPresent } from "framer-motion";
import { createRoot } from 'react-dom/client';

function RecognizerListener({seconds, setSeconds, scores, setScores}) {
    useEffect(() => {
        const childs = document.getElementById("label-container").childNodes;
        let result = []
        console.log("------------------------------------------------------")
        for (const child of childs) {
            console.log(child.innerHTML)
            // eslint-disable-next-line no-restricted-globals
            const score = parseFloat(child.innerHTML.substring(child.innerHTML.length-3, child.innerHTML.length))
            console.log(score)
            console.log("-------------------")
            result.push(score)
        }
        console.log("------------------------------------------------------")
        console.log(result)
        const intervalId = setInterval(() => setScores(result), 1000);
        return () => clearInterval(intervalId);    
    }, [scores])

    return (
        <></>
    )

}

export default RecognizerListener