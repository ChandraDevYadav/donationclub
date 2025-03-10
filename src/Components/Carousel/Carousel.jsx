import React, { useState } from "react";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa6";
import { LuArrowRightToLine } from "react-icons/lu";


const Carousel = () => {

    // Carousel data array
    const slides = [
        {
            id: 1,
            bgImage: "/slider-v1-img-1.jpg",
            overlayImage: "/slider-bg1.jpg",
            title: "We help companies",
            description: "Give a little change you a lot",
        },
        {
            id: 2,
            bgImage: "/slider-v1-img-2.jpg",
            overlayImage: "/slider-bg1.jpg",
            title: "We help companies",
            description: "Together, we can make the world better",
        },
        {
            id: 3,
            bgImage: "/slider-v1-img-3.jpg",
            overlayImage: "/slider-bg1.jpg",
            title: "We help companies",
            description: "Every gift counts your Every life matters",
        },
    ];

    const [currentSlide, setCurrentSlide] = useState(0);

    // Function to handle previous and next buttons
    const handlePrev = () => {
        setCurrentSlide((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
    };

    const handleNext = () => {
        setCurrentSlide((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
    };

    return (
        <div className="relative w-full min-h-screen overflow-hidden">
            {/* Carousel Slides */}
            {slides.map((slide, index) => (
                <div
                    key={slide.id}
                    className={`absolute inset-0 transition-opacity duration-700 ${index === currentSlide ? "opacity-100" : "opacity-0"
                        }`}
                >
                    {/* Background Image */}
                    <div
                        className="h-full bg-cover bg-top"
                        style={{ backgroundImage: `url(${slide.bgImage})` }}
                    >
                        {/* Overlay Image */}
                        <div className="absolute">
                            <img
                                src={slide.overlayImage}
                                alt={`Overlay ${slide.id}`}
                                className="w-full h-full opacity-90 bg-top rounded-md shadow-lg"
                            />
                        </div>
                        {/* Text Content */}
                        <div className="absolute top-1/4 left-24">
                            <h2 className="text-4xl font-medium font-caudex text-gray-700">{slide.title}</h2>
                            <p className="text-8xl font-bold font-caudex mt-2 text-white">
                                {slide.description.split(" ").map((word, index) => (
                                    <>
                                        {word}{" "}
                                        {(index + 1) % 3 === 0 && <br />} {/* Add <br /> after every 3 words */}
                                    </>
                                ))}
                            </p>
                            <button className="relative group flex justify-start items-center gap-2 mt-10 overflow-hidden bg-white border border-orange-600 text-gray-800 px-6 py-2 text-lg font-medium rounded-full">
                                <span className="relative z-10">Donate Now</span>
                                <span className="relative z-10 bg-orange-600 text-white p-3 rounded-full group-hover:bg-white group-hover:p-3 group-hover:rounded-full group-hover:text-gray-700">
                                    <LuArrowRightToLine />
                                </span>
                                <span
                                    className="absolute inset-0 bg-red-600 rounded-full transform scale-0 opacity-0 group-hover:scale-150 group-hover:opacity-100 group-hover:animate-expandCircle group-hover:duration-1000 transition-all"
                                />
                            </button>



                        </div>
                    </div>
                </div>
            ))}

            {/* Navigation Buttons */}
            <button
                onClick={handlePrev}
                className="absolute top-[40%] right-10 transform -translate-y-1/2 group overflow-hidden bg-white text-gray-700 p-4 text-3xl rounded-full"
            >
                <span className="relative z-10"> {/* Keeps the icon visible */}
                    <FaArrowLeft />
                </span>
                <span
                    className="absolute inset-0 bg-red-600 transform -translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-in-out"
                />
            </button>

            <button
                onClick={handleNext}
                className="absolute top-1/2 right-10 transform -translate-y-1/2 group overflow-hidden bg-white text-gray-700 p-4 text-3xl rounded-full"
            >
                <span className="relative z-10"> {/* Keeps the icon visible */}
                    <FaArrowRight />
                </span>
                <span
                    className="absolute inset-0 bg-red-600 transform translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-in-out"
                />
            </button>
        </div>
    );
};

export default Carousel;
