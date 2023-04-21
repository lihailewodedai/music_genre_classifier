import React, { useEffect, useState } from 'react';
import ReactDOM from 'react-dom/client';
import { motion, AnimatePresence, useMotionValue, useTransform, animate, useIsPresent } from "framer-motion";
import { createRoot } from 'react-dom/client';
import RecognizerListener from './RecognizerListener';
import BarChartContainer from './BarChart';

// import * as 

function DataVisContainer({showButton}) {
    const [blurRadius, setBlurRadius] = useState(10)

    const [scores, setScores] = useState([])
    // Background noise, caugh, clap, hamming, snap, whistle, background noise

    const [seconds, setSeconds] = useState(0)


    return (
        <div style={
            {
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
            }
        }>
            <RecognizerListener seconds={seconds} setSeconds={setSeconds} scores={scores} setScores={setScores}/>
            <DataVisDiv blurRadius={blurRadius} scores={scores}/>
        </div>
    )
}

function DataVisDiv({blurRadius, scores}) {

    const styleDataVisualDiv = {
        borderStyle: "none",
        borderRadius:"10px",
        height:"70vmin",
        width:"70vmin",
        background:"white",
        marginTop:"-2vmin",
        WebkitBoxShadow: `0px 5px ${blurRadius}px -1px rgba(166,166,166,1)`,
        boxShadow:`0px 5px ${blurRadius}px -1px rgba(166,166,166,1)`,
        display: 'flex',
        flexDirection: "column",
        alignItems: 'center',

    }

    console.log(`data vis div ${scores}`)
    console.log(scores)

    return (
        <AnimatePresence>
            <motion.div 
                key="DataVisDiv"
                initial={{ opacity:0 }}
                animate={{ opacity:1 }}
                transition={{ type:"tween"}}
                whileHover={{ boxShadow:"0px 5px 20px -1px rgba(166,166,166,1)" }}
                style={styleDataVisualDiv}
                className="data-visual-container">
                {/* Header div */}
                <div className='div-header' style={{
                    borderBottomStyle:"solid",
                    borderBottomWidth:"1px",
                    width:"95%",
                    height:"8vmin",
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    color: "rgb(142, 142, 142)",
                    fontSize: "3vmin",
                }}>
                    <span
                        style={{
                            marginRight:"auto",
                        }}
                    >percentages</span>
                </div>
                {/* Body div */}
                <div className='body-container' style={{
                    width:"100%",
                    height:"80%",
                    background:"white",
                }}>
                    <BarChartContainer category={"Background noise"} percentage={ scores[0] } color={"#FF9696"} id={0}/>
                    <BarChartContainer category={"Caugh"} percentage={ scores[1] } color={"#FF9696"} id={1}/>
                    <BarChartContainer category={"Clap"} percentage={ scores[2] } color={"#FF9696"} id={2}/>
                    <BarChartContainer category={"Hamming"} percentage={ scores[3] } color={"#FF9696"} id={3}/>
                    <BarChartContainer category={"Snap"} percentage={ scores[4] } color={"#FF9696"} id={4}/>
                    <BarChartContainer category={"Whistle"} percentage={ scores[5] } color={"#FF9696"} id={5}/>
                </div>
            </motion.div>
        </AnimatePresence>
    )
}

export default DataVisContainer