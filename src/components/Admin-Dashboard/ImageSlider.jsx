import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css";

const ImageSlider = () => {
    return (
        <Carousel showThumbs={false} autoPlay={true} infiniteLoop={true} showIndicators={false} emulateTouch={true}>
            <div>
                <img src="/assets/admin/image/slide/img-3.png" alt="First slide" height={'350px'} />
            </div>
            <div>
                <img src="/assets/admin/image/slide/img-4.png" alt="First slide" height={'350px'}/>
            </div>
            <div>
                <img src="/assets/admin/image/slide/img-3.png" alt="First slide" height={'350px'} />
            </div>
            <div>
                <img src="/assets/admin/image/slide/img-5.png" alt="First slide" height={'350px'} />
            </div>
        </Carousel>
    );
};

export default ImageSlider;
