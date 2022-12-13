import React from 'react'
import { useState } from 'react'
import "./Slider.css"

const Slide = ({data}) => {

    const [currentIndex,setCurrentIndex] = useState(0)

    const sliderStyles = {
        height: "100%",
        position : "relative"
    }

    const slideStyles = {
        width : "100%",
        height : "100%",
        borderRadius : "10px",
        backgroundPosition : "center",
        backgroundSize : "cover",
        backgroundImage : `url(${data[currentIndex].url})`
    }
    
    const leftArrowStyles = {
        position: 'absolute',
        top : '50%',
        transform : 'translate(0,-50%)',
        left : '32px',
        fontSize : '55px',
        color : '#fff',
        zIndex : 1333,
        cursor : 'pointer',
    }

    const rightArrowStyles = {
        position: 'absolute',
        top : '50%',
        transform : 'translate(0,-50%)',
        right : '32px',
        fontSize : '55px',
        color : '#fff',
        zIndex : 133,
        cursor : 'pointer',
    }

    const dotsContainerStyles = {
        display :"flex",
        justifyContent : "center",
        alignItems : "center"
    }

    const dotStyle = {
        margin : "0 5px",
        cursor : "pointer",
        fontSize : "50px"
    }
    
    const goToSlide = (slideIndex) => {
        setCurrentIndex(slideIndex)
    }

    const goToPrevious = () => {
        const isFirstSlide = currentIndex === 0

        const newIndex = isFirstSlide ? data.length - 1 : currentIndex - 1

        setCurrentIndex(newIndex)
    }

    const goToNext = () => {
        const isLastSlide = currentIndex === data.length - 1

        const newIndex = isLastSlide ? 0 : currentIndex + 1

        setCurrentIndex(newIndex)
    }

  return (
    <div style = {sliderStyles}>
        <div style={leftArrowStyles} onClick={goToPrevious}>{"<"}</div>
        <div style={rightArrowStyles} onClick={goToNext}>{">"}</div>
        <div style={slideStyles}></div>
        <div style = {dotsContainerStyles}>
        {
            data.map((slide,slideIndex)=> (
                <div key={slideIndex} style = {dotStyle} onClick={() => goToSlide(slideIndex)}>

                    <div style={{color : slideIndex === currentIndex ? "blue" : "black" }}>
                        {"."}
                    </div>

                </div>
            ))
        }
            
        </div>
    </div>
  )
}

export default Slide