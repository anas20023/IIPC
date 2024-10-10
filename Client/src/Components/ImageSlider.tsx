// eslint-disable-next-line react-refresh/only-export-components
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css'; // Basic Swiper styles
import 'swiper/css/pagination';
import images from '../data/gallary';
import { Autoplay } from 'swiper/modules';
import SwiperCore from 'swiper';

// Install Swiper modules
SwiperCore.use([Autoplay]);

const ImageSlider = ({ onClose }) => {
    return (
        <div className="fixed items-center justify-center z-50 mx-4 h-screen inset-0 bg-black bg-transparent flex backdrop-blur-sm">
            {/* Container for the slider */}
            <div className="flex flex-col w-full max-w-4xl bg-slate-600 rounded">
                {/* Header for title and close button */}
                <div className="flex justify-between items-center w-full px-4 py-2 border-b-2 bg-slate-800 rounded-t-lg">
                    <span className="text-white text-lg font-semibold">
                        Image Gallery IIPC 52
                    </span>
                    <button
                        className="text-slate-50 hover:text-red-600 text-4xl transition duration-200 ease-in-out font-semibold"
                        onClick={onClose} // Call the onClose function passed as prop
                    >
                        &times;
                    </button>
                </div>

                {/* Image Slider Container */}
                <div className="relative bg-slate-800 rounded-b shadow-lg">
                    {/* Swiper Image Slider */}
                    <Swiper
                        spaceBetween={30}
                        centeredSlides={true}
                        autoplay={{
                            delay: 3000,
                            disableOnInteraction: false,
                        }}
                        pagination={false} // Remove dots
                        navigation={true} // Remove navigation buttons
                        className="w-full h-64 sm:h-80 md:h-96"
                    >
                        {images.map((image, index) => (
                            <SwiperSlide key={index}>
                                <img
                                    src={image}
                                    alt={`Slide ${index}`}
                                    className="w-full h-full object-cover rounded-b"
                                />
                            </SwiperSlide>
                        ))}
                    </Swiper>
                </div>
            </div>
        </div>
    );
};

export default ImageSlider;
