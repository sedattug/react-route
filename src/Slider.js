import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import slider_1 from './images/slider-1.png';
import slider_2 from './images/slider-2.png';

function Slider() {

    return(
        <Carousel>
            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src={slider_1}
                    alt="First slide"
                />
                <Carousel.Caption>
                    <h3>First slide label</h3>
                    <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src={slider_2}
                    alt="Third slide"
                />

                <Carousel.Caption>
                    <h3>Second slide label</h3>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                </Carousel.Caption>
            </Carousel.Item>
        </Carousel>
    );

}

export default Slider;