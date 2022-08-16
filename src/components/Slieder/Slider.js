import React, { Fragment } from 'react'
import { Carousel } from 'react-bootstrap'
import "./slider.css"
import slider1 from '../../images/slider1.jpg'
import slider2 from '../../images/slider2.jpg'

const Slider = () => {
  return (
    <Fragment>
        <div className="sliderx">
        <h2>Testimonials</h2>
            <div className='container'>
            
                <Carousel>
                            <Carousel.Item >
                                <div>
                                <img src={slider1} alt="First slide"/>
                                </div>
                                <Carousel.Caption>
                                <h3>"Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live."</h3>
                                <p>Simab Dave - Web Designer</p>
                                </Carousel.Caption>
                            </Carousel.Item>
                            <Carousel.Item >
                                <img src={slider2} alt="Second slide"/>
                                <Carousel.Caption>
                                <h3>"Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live."</h3>
                                <p>Simab Dave - Web Designer</p>
                                </Carousel.Caption>
                            </Carousel.Item>
                            <Carousel.Item >
                                <img src={slider1} alt="Third slide"/>
                                <Carousel.Caption>
                                <h3>"Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live."</h3>
                                <p>Simab Dave - Web Designer.</p>
                                </Carousel.Caption>
                            </Carousel.Item>
                </Carousel>
            </div>
        </div>
    </Fragment>
    )
}

export default Slider