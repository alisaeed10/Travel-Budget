import '../Pages/FirstPage/FirstPage.css';
import { useEffect, useState } from 'react';


export function SlideShow() {
    const [slideIndex, setSlideIndex] = useState(0);
    const [imageIndex, setImageIndex] = useState(0);
    const [slideIndex2, setSlideIndex2] = useState(1);
    const [slideIndex3, setSlideIndex3] = useState(2);

    const slides = [  
        {id: 1, title: "Santorini, Greece", content: ["../../../public/Greece/Santorini.png", "../../../public/Greece/Santorini2.png", "../../../public/Greece/santorini3.png", "../../../public/Greece/Santorini4.png" ]},

        {id: 2, title: "Istanbul, Turkey", content: ["../../../public/Istanbul/istanbul.png", "../../../public/Istanbul/istanbul2.png", "../../../public/Istanbul/istanbul3.png", "../../../public/Istanbul/istanbul4.png" ]},

        { id: 3, title: "Tokyo, Japan", content: ["../../../public/Tokyo/tokyo1.png", "../../../public/Tokyo/tokyo2.png", "../../../public/Tokyo/tokyo3.png", "../../../public/Tokyo/tokyo4.png" ]}, 

        {id: 4, title: "Venice, Italy", content: ["../../../public/italy/Vince-Italy.png", "../../../public/italy/Veince2.png"]},
    ];
    useEffect(() => {
        const interval = setInterval(() => {
            setImageIndex((imageIndex + 1) % slides[slideIndex2].content.length);
            //make a smooth transition to the next slide


        }, 5000);
        return () => clearInterval(interval);
      // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [imageIndex, slideIndex]);

    useEffect(() => {
        const interval = setInterval(() => {
            setSlideIndex2((slideIndex2 + 1) % slides.length);
            setSlideIndex3((slideIndex3 + 1) % slides.length);
            setSlideIndex((slideIndex + 1) % slides.length);
        }, 10000);
        return () => clearInterval(interval);
      // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

return (
    <div className="slideshow">
        <div className="slideshow-Slides">
            <div className="previousSlide">
                <img className='previousImage' src={slides[slideIndex].content[0]}  />
                <p className="slide-title">{slides[slideIndex].title}</p>
            </div>
            <div className="currentSlide">
                <img className='currentImage' src={slides[slideIndex2].content[imageIndex]}  />
                <p className="slide-title">{slides[slideIndex2].title}</p>
            </div>
            <div className="nextSlide">
                <img className='nextImage'src={slides[slideIndex3].content[0]} />
                <p className="slide-title">{slides[slideIndex3].title}</p>
            </div>
        </div>
    </div>
);
}
