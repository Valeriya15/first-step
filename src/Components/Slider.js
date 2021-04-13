import { Carousel } from 'bootstrap';
import React from 'react';
import { } from 'react-bootstrap';
import vine from '../vine.jpg'


export default function Slider() {
    return (
<Carousel>
     <Carousel.Item>
                <img
                    className='d-block w-100'
                    src={vine}
                    alt= "First slide"
                />
                         
    </Carousel.Item>
</Carousel>
    )
}