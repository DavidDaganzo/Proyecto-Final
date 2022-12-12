import Carousel from 'react-bootstrap/Carousel';
import AutoComplete from '../../components/SeachBar/SearchBar';
import './HomePage.css'
import Header from '../../components/Header/Header';
import video from '../../asssets/homePageVideo.mp4'
import Loader from '../../components/Loader/Loader';
const HomePage = () => {
    return (
        <>
            <Header />
            {/* <Carousel>
                <Carousel.Item className='IndexCarousel'>
                    <img
                        className="d-block w-100"
                        src="https://www.casasordesa.com/documentos_web/documentos/Casa%20ordesa%20pano%20horizontal%20bis.jpg"
                        alt="First slide"
                    />
                    <Carousel.Caption>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item className='IndexCarousel'>
                    <img
                        className="d-block w-100"
                        src="https://dynamic-media-cdn.tripadvisor.com/media/photo-o/1c/57/c9/f5/nomading-camp-andorra.jpg?w=700&h=-1&s=1"
                        alt="Second slide"
                    />

                    <Carousel.Caption>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item className='IndexCarousel'>
                    <img
                        className="d-block w-100"
                        src="https://media-magazine.trivago.com/wp-content/uploads/sites/3/2016/08/17120409/hoteles-7-estrellas-Laucala-Island-Resort-piscina.jpg"
                        alt="Third slide"
                    />

                    <Carousel.Caption>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel> */}
            {!video ? <Loader /> :
                <video className='homeVideo' src="https://res.cloudinary.com/devlxmp7l/video/upload/v1670700657/video_ynp7ld.mp4"
                    autoPlay
                    loop
                    muted
                    playsInline
                ></video>
            }


            {/* <source src="https://res.cloudinary.com/devlxmp7l/video/upload/v1670700657/video_ynp7ld.mp4" type="video/mp4" /> */}

        </>
    )
}
export default HomePage