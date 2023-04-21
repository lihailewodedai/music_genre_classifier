import React, { useEffect, useState } from 'react';
import ReactDOM from 'react-dom/client';
import { motion, AnimatePresence, useMotionValue, useTransform, animate, useIsPresent } from "framer-motion";
import { createRoot } from 'react-dom/client';

function BarChartContainer({category, percentage, color, id}) {
    const categoryDescription = category+"-name"
    const categoryBarContainer = category+"-bar-container"
    const categoryBar = category+"-bar"
    const categoryPercentage = category+"-percentage"

    if (!percentage) {
        console.log("yes")
        percentage = 0
    }

    const descriptionStyle = {
        backGround: "#FFFFFF",
        border: "2px solid #8338EC",
        boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.25)",
        borderRadius: "5px",
        minWidth:"17vmin",
        maxWidth:"17vmin",
        minHeight:"4vmin",
        marginRight:"auto",
        marginLeft:"2vmin",
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        padding:"0",
    }

    const barBoxStyle = {
        backGround: "#FFFFFF",
        border: "2px solid #8338EC",
        boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.25)",
        minWidth:"17vmin",
        maxWidth:"17vmin",
        minHeight:"4vmin",
        borderRadius: "5px",
        minWidth:"40vmin",
        marginRight:"2vmin",
        marginLeft:"auto",
        padding:"0",
        alignSelf:"flex-end",
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
    }

    const categoryPercentageStyle = {
        borderLeftStyle:"solid",
        borderLeftWidth:"1px",
        marginRight:"1%",
        padding:"0.5vmin",
        paddingLeft:"1.3vmin",
        minWidth:"10%",
        maxWidth:"10%",
    }


    return (
        <div style={{
            display: 'flex',
            alignItems: 'center',
            marginTop:'3vmin',

        }}>
            {/* Description div */}
            <div className={categoryDescription}
                style={descriptionStyle}>{category}
            </div>

            {/* Category bar div */}
            <div className={categoryBarContainer} 
            style={barBoxStyle}>

                {/* Bar */}
                <motion.div
                    className={categoryBar}
                    transition={{ type:"inertia", velocity: 100 }}
                    animate={{ width:`${30.5*(percentage)}vmin` }}
                    style={{
                        border: "2px solid #8338EC",
                        marginRight:"auto",
                        marginLeft:"4%",
                    }}
                >
                </motion.div>

                {/* Rest */}
                <div
                    className={categoryPercentage}
                    style={categoryPercentageStyle}
                >{((percentage)*100).toFixed(0)}%</div>
            </div>
        </div>
    )
}


export default BarChartContainer