import React, { useEffect, useState } from 'react';
import ReactDOM from 'react-dom/client';
import { motion, AnimatePresence, useMotionValue, useTransform, useIsPresent } from "framer-motion";
import { createRoot } from 'react-dom/client';


function GoButtonContainer({showButton, setShowButton, setShowDataVisDiv, showDataVis}) {

    const x = useMotionValue(100)
    const y = useMotionValue(100)

    const rotateX = useTransform(y, [0, 4000], [45, -500])
    const rotateY = useTransform(x, [0, 4000], [-45, 200])



    function handleMouse(event) {
        x.set(event.pageX)
        y.set(event.pageY)
    }

    // Event handler state hook
    const onClickHandler = (event) => {
        console.log("called")
        const element = document.querySelector('.btn')
        element.click()
        console.log("element clicked")
        setShowButton(false)
    }



    const [percentages, setPercentages] = useState([0, 30, 60])
    const [rgba, setRgba] = useState(["131,58,180,1", "253,29,29,1", "252,176,69,1"])
    const [background, setBackground] = useState("linear-gradient(90deg, rgba(131,58,180,1) 0%, rgba(253,29,29,1) 82%, rgba(252,176,69,1) 100%)")
    const [backgroundClip, setBackgroundClip] = useState("text")

    // onHover state hook
    const onHover = (event) => {

        
        let temp = [[rgba[0], ((percentages[0]+0.2)%100)], [rgba[1], ((percentages[1]+0.2) % 100)], [rgba[2], ((percentages[2]+0.2) % 100)]]

        let temp2 = [temp[0]]
        for (let index = 1; index < temp.length; index++){
            const element = temp[index];
            let finIndex = 0
            for (const iterator of temp2) {
                if (element[1] > iterator[1]) {
                    finIndex += 1
                } else {
                    break
                }
            }
            temp2.splice(finIndex, 0, element)
        }
        temp = temp2
        setPercentages([temp[0][1], temp[1][1], temp[2][1]])
        setRgba([temp[0][0], temp[1][0], temp[2][0]])

        const backgroundString = `linear-gradient(90deg, rgba(${temp[0][0]}) ${temp[0][1]}%, rgba(${temp[1][0]}) ${temp[1][1]}%, rgba(${temp[2][0]}) ${temp[2][1]}%)`
        console.log(backgroundString)
        setBackground(backgroundString)
        setBackgroundClip("text")
    }


    return (
        <div 
            onMouseMove={handleMouse}
        >
        <AnimatePresence>
            {showButton && (<motion.div
                key="GoButton"
                initial={{ scale:0 }}
                animate={{ y:50, scale:1 }}
                exit={{ opacity:0 }}
                style={{
                    marginLeft:"23.5%",
                    rotateX: rotateX,
                    rotateY: rotateY,
                    perspective: 50,
                }}
            >
                <GoButton display={showButton} onHover={onHover} onClickHandler={onClickHandler} backgroundColor={background} backgroundClip={backgroundClip} setShowDataVisDiv={setShowDataVisDiv} showDataVis={showDataVis}/>
            </motion.div>)}
        </AnimatePresence>
        </div>
    )
}

function GoButton({display, onHover, onClickHandler, backgroundColor, backgroundClip, setShowDataVisDiv, showDataVis}) {
    const isPresent = useIsPresent()

    useEffect(() => {
        if(!isPresent) {
            setShowDataVisDiv(true)
        }
        console.log(showDataVis)
    }, [isPresent])

    const styleBtn = {
        fontSize: '30vmin',
        display: "block",
        padding:"0",
        width:"50%",
        height:"0%",
        marginLeft:"12vmin",
        WebkitTextStrokeWidth: "5px",
        WebkitTextFillColor:"transparent",
        background:backgroundColor,
        WebkitBackgroundClip: backgroundClip,

    }

    return(
    <span 
        style={styleBtn} 
        onMouseDown={onClickHandler} 
        onMouseOverCapture={onHover}
        key={backgroundColor}
    >Go</span>
    )
}

export default GoButtonContainer