import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import './Slider.css'

function Slider() {
    
    var intFrameWidth2 = window.innerWidth;

    return (
        <div className="SliderContainer">
            <Carousel controls={false} fade={false} className="Carousel" >
            <Carousel.Item>
                <div className="Slider">
                        <div className={ intFrameWidth2 < 768 ? "Middle2" : "Middle" }>
                            <div className={ intFrameWidth2 < 768 ? "MiddleInfo2" : "MiddleInfo" }>
                                <h1>Many tools</h1>
                                <p>I have a wide stack of technologies, ready to offer quality in each development.</p>
                                <a href="#webWorks" className="SliderButton">+ info</a>
                            </div>
                        </div>
                        <div className={ intFrameWidth2 < 768 ? "Middle2" : "Middle" }>
                            <div className="MiddleImage3"></div>
                        </div>
                    </div>
                </Carousel.Item>
                <Carousel.Item>
                    <div className="Slider">
                        <div className={ intFrameWidth2 < 768 ? "Middle2" : "Middle" }>
                            <div className={ intFrameWidth2 < 768 ? "MiddleInfo2" : "MiddleInfo" }>
                                <h1>Custom development</h1>
                                <p>I execute the functional needs very well, with a nice modern design.</p>
                                <a href="#webWorks" className="SliderButton">+ info</a>
                            </div>
                        </div>
                        <div className={ intFrameWidth2 < 768 ? "Middle2" : "Middle" }>
                            <div className="MiddleImage1"></div>
                        </div>
                    </div>
                </Carousel.Item>
                <Carousel.Item>
                <div className="Slider">
                        <div className={ intFrameWidth2 < 768 ? "Middle2" : "Middle" }>
                            <div className={ intFrameWidth2 < 768 ? "MiddleInfo2" : "MiddleInfo" }>
                                <h1>End-to-end designs</h1>
                                <p>Developments from the back end side to the front end graphical interface</p>
                                <a href="#webWorks" className="SliderButton">+ info</a>
                            </div>
                        </div>
                        <div className={ intFrameWidth2 < 768 ? "Middle2" : "Middle" }>
                            <div className="MiddleImage2"></div>
                        </div>
                    </div>
                </Carousel.Item>
            </Carousel>
        </div>
    )
}



export default Slider
