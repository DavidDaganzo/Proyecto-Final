import React, { Component } from 'react';
import Carousel from 'react-bootstrap/Carousel'

class MyCarousel extends Component {
    render() {
        return (
            <Carousel>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src="https://cf.bstatic.com/xdata/images/hotel/max1280x900/372216014.jpg?k=d062963f7ee87839c52fd8d6b070566f3d46011ae8e23136e4c4d89c314e27a8&o=&hp=1"
                        alt="First slide"
                    />
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src="https://thumbs.dreamstime.com/b/casa-cl%C3%A1sica-con-el-jard%C3%ADn-de-flor-751996.jpg"
                        alt="Third slide"
                    />
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src="https://www.casaruralaguaclara.com/public/images/contents-1-img-11-portada.GQ6.jpg"
                        alt="Third slide"
                    />

                </Carousel.Item>
            </Carousel>
        )
    }
}

export default MyCarousel;