import React, { useEffect, useState } from 'react';
import ReactDOM from 'react-dom/client';
import { motion, AnimatePresence, useMotionValue, useTransform, animate, useIsPresent } from "framer-motion";
import { createRoot } from 'react-dom/client';
import RecognizerListener from './RecognizerListener';
import BarChartContainer from './BarChart';
import SettingButtonContainer from './SettingButton';
import SettingPageContainer from './SettingPage';
import ListenerSwitch from './listenerSwitch';
// import * as 

function DataVisContainer({showButton}) {
    const [blurRadius, setBlurRadius] = useState(10)

    const [scores, setScores] = useState([])
    // Background noise, caugh, clap, hamming, snap, whistle, background noise

    const [seconds, setSeconds] = useState(0)

    const [listenerOn, setListener] = useState(true)

    return (
        <div style={
            {
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
            }
        }>
            <RecognizerListener seconds={seconds} setSeconds={setSeconds} scores={scores} setScores={setScores} listenerOn={listenerOn}/>
            <DataVisDiv blurRadius={blurRadius} scores={scores} listenerOn={listenerOn} setListener={setListener}/>
        </div>
    )
}

function DataVisDiv({blurRadius, scores, listenerOn, setListener}) {

    const [displaySetting, setDisplaySetting] = useState(false)

    const [displayingCategories, setCategories] = useState([true, true, true, true, true, true])

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
                    width:"100%",
                    height:"8vmin",
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    color: "rgb(142, 142, 142)",
                    fontSize: "3vmin",
                }}>
                    <span style={{marginRight:"auto", marginLeft:"3vmin",}}>
                        percentages
                    </span>
                    
                    <SettingButtonContainer setDisplay={setDisplaySetting} display={displaySetting}/>
                
                </div>

                {/* chart body div */}
                <div className='body-container' style={{
                    width:"100%",
                    height:"80%",
                    background:"white",
                    background:"#4C91FE",
                    borderBottom:"solid",
                    borderWidth:"1px",
                    borderColor:"rgb(142, 142, 142)",
                }}>
                    {displayingCategories[0] && <BarChartContainer category={"Background noise"} percentage={ scores[0] } color={"#FF8F0B"} id={0}/>}
                    {displayingCategories[1] && <BarChartContainer category={"Caugh"} percentage={ scores[1] } color={"#FF006E"} id={1}/>}
                    {displayingCategories[2] && <BarChartContainer category={"Clap"} percentage={ scores[2] } color={"#FB5607"} id={2}/>}
                    {displayingCategories[3] && <BarChartContainer category={"Hamming"} percentage={ scores[3] } color={"#0a9396"} id={3}/>}
                    {displayingCategories[4] && <BarChartContainer category={"Snap"} percentage={ scores[4] } color={"#8338EC"} id={4}/>}
                    {displayingCategories[5] && <BarChartContainer category={"Whistle"} percentage={ scores[5] } color={"#ef233c"} id={5}/>}

                    <ListenerSwitch listenerOn={listenerOn} setListener={setListener}/>
                </div>

                {/* settingpage */}
                <SettingPageContainer setDisplaySetting={setDisplaySetting} display={displaySetting} setCategories={setCategories} displayingCategories={displayingCategories}/>
            </motion.div>
        </AnimatePresence>
    )
}

export default DataVisContainer