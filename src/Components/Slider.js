import { Carousel } from 'react-bootstrap';
import React from 'react';


import vine from '../738992.jpg';


export default function Slider() {
    return (
<Carousel>
     <Carousel.Item>
                <img
                    className='d-block w-100'
                    src={vine}
                    alt= "First slide"
                />
                <Carousel.Caption>
                    <h3>Framework</h3>
                </Carousel.Caption>
    </Carousel.Item>
</Carousel>
    )
}