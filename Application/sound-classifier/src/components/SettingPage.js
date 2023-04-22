import React, { useEffect, useState } from 'react';
import ReactDOM from 'react-dom/client';
import { motion, AnimatePresence, useMotionValue, useTransform, animate, useIsPresent } from "framer-motion";
import { createRoot } from 'react-dom/client';

import DisplayControlContainer from './displayBar';

function SettingPageContainer({setDisplaySetting, display, displayingCategories, setCategories}) {
    console.log(displayingCategories)

    return (
            <div>
                {display && < SettingPage display={display} setDisplaySetting={setDisplaySetting} displayingCategories={displayingCategories} setCategories={setCategories}/>}
            </div>
    )
}

function SettingPage({display, setDisplaySetting, displayingCategories, setCategories}){
    
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
        backgroundColor:"white",
        WebkitBoxShadow: "2px 8px 15px 5px rgba(0,0,0,0.1)", 
        boxShadow: "2px 8px 15px 5px rgba(0,0,0,0.1)",
    }

    const innerHeading = {
        borderBottomStyle:"solid",
        borderBottomWidth:"1px",
        width:"100%",
        height:"8vmin",
        display: 'flex',
        borderColor:"#E6E6E6",
        justifyContent: 'center',
        alignItems: 'center',
    }

    const innerDisplay = {
        borderBottomStyle:"solid",
        borderBottomWidth:"1px",
        width:"100%",
        display: 'flex',
        borderColor:"#E6E6E6",
        flexDirection:"column",
        paddingBottom:"1vmin",
    }

    return (
        <motion.div className='SettingPage' style={outer} key={"rgba(0,0,0, 0.2)"}
            initial={{ opacity:0 }}
            animate={{ opacity:1 }}
            transition={{ type:"tween", duration:0.5}}
        >
            <div className='SettingPage-inner' style={inner} >
                <div style={{
                    display: 'flex',
                    alignItems: 'center',
                    flexDirection:"column",
                }}>
                    {/* Inner Heading */}
                    <div className='inner-heading' style={innerHeading}>
                        <span style={{marginRight:"auto", marginLeft:"3vmin", color:"#001F54", fontSize:"3vmin"}}>
                            Settings
                        </span>
                        <div style={{ marginLeft:"auto", marginRight:"3vmin", marginTop:"2%"}} 
                            onClick={() => {console.log("something")}}>
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-x-lg" viewBox="0 0 16 16" onClick={() => {setDisplaySetting(false)}}>
                                <path d="M2.146 2.854a.5.5 0 1 1 .708-.708L8 7.293l5.146-5.147a.5.5 0 0 1 .708.708L8.707 8l5.147 5.146a.5.5 0 0 1-.708.708L8 8.707l-5.146 5.147a.5.5 0 0 1-.708-.708L7.293 8 2.146 2.854Z"/>
                            </svg>
                        </div>
                    </div>    

                    {/* Inner body */}
                    <div className="SettingPage-inner-display" style={innerDisplay} >
                        <div style={{marginRight:"auto", marginLeft:"3vmin", color:"#001F54", fontSize:"2.5vmin"}}>
                            display
                        </div>
                        <DisplayControlContainer displayingCategories={displayingCategories} setCategories={setCategories} id={0} categoryName={"Background noise"}/>
                        <DisplayControlContainer displayingCategories={displayingCategories} setCategories={setCategories} id={1} categoryName={"Caugh"}/>
                        <DisplayControlContainer displayingCategories={displayingCategories} setCategories={setCategories} id={2} categoryName={"Clap"}/>
                        <DisplayControlContainer displayingCategories={displayingCategories} setCategories={setCategories} id={3} categoryName={"Hamming"}/>
                        <DisplayControlContainer displayingCategories={displayingCategories} setCategories={setCategories} id={4} categoryName={"Snap"}/>
                        <DisplayControlContainer displayingCategories={displayingCategories} setCategories={setCategories} id={5} categoryName={"Whistle"}/>
                    </div>
                </div>
            </div>

        </motion.div>
    )
}

export default SettingPageContainer