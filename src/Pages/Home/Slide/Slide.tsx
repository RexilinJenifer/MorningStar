import React, { memo } from 'react'
import redcar from "../../../Assets/Images/black.jpeg"
import bluecar from "../../../Assets/Images/whitecar.jpeg"
import whitecar from "../../../Assets/Images/redcar.jpeg"
import Carousel from 'react-bootstrap/Carousel'
import { useState } from 'react'
const video = require("../../../Assets/video/video2.mp4");
// import video from "../../../Assets/video/car";


interface ISlide {

}
const Slide: React.FC<ISlide> = (props) => {
    const [index, setIndex] = useState(0);

    return (
        <div className='slide-images'>           
            <Carousel>
                <Carousel.Item>                  
                    <video src={video} muted autoPlay playsInline loop className='video-slide' />
                    <Carousel.Caption className='carousel-caption'>
                        <h3 className='caption'><b>Start Your Journey with Morning Star - Get Moving, Get Going!</b></h3>
                        <br />
                        <h1 className='sub-caption'><b>Start Your Journey with Morning Star Rental Cars: </b></h1>
                        <br />
                        <h1 className='sub-caption'><b>Where Every Mile is a Memory!</b> </h1>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src={bluecar}
                        alt="Second slide"
                    />

                    <Carousel.Caption className='carousel-caption'>
                        <h3 className='caption'><b>Start Your Journey with Morning Star - Get Moving, Get Going!</b></h3>
                        <br />
                        <h1 className='sub-caption'><b>Start Your Journey with Morning Star Rental Cars:</b></h1>
                        <br />
                        <h1 className='sub-caption'><b>Where Every Mile is a Memory!</b> </h1>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src={whitecar}
                        alt="Third slide"
                    />

                    <Carousel.Caption className='carousel-caption'>
                        <h3 className='caption'><b>Start Your Journey with Morning Star - Get Moving, Get Going!</b></h3>
                        <br />
                        <h1 className='sub-caption'><b>Start Your Journey with Morning Star Rental Cars: </b></h1>
                        <br />
                        <h1 className='sub-caption'><b>Where Every Mile is a Memory!</b> </h1>

                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
        </div>

    )
}

export default memo(Slide)