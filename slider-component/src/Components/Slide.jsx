import React from 'react'
import { useState } from 'react'
import "./Slider.css"

const Slide = ({data}) => {

    const [currentIndex,setCurrentIndex] = useState(0)

    const slideStyles = {
        width : "100%",
        height : "100%",
        borderRadius : "10px",
        backgroundPosition : "center",
        backgroundSize : "cover",
        backgroundImage : `url(${data[currentIndex].url})`
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
    <div className = 'sliderStyles'>

        <div className='leftButton'>
            <button className = 'leftArrowStyles'  onClick={goToPrevious}>
                {"<"}
            </button>
        </div>

        <div className='rightButton'>
            <button className = 'rightArrowStyles' onClick={goToNext}>
                {">"}
            </button>
        </div>

        <div style={slideStyles}></div>

        <div className='dotsContainerStyles'>
        {
            data.map((slide,slideIndex)=> (
                <div key={slideIndex} className='dotStyle' >
                    <div style={{color : slideIndex === currentIndex ? "blue" : "black" }}
                    onClick={() => goToSlide(slideIndex)}>
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