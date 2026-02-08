import React, { useState, useEffect, useCallback } from 'react';
import { carouselStyles } from '../../assets/dummyStyles';
import { SLIDER_DATA } from '../../assets/dummywdata';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const MinimalCarousel = () => {
    const [current, setCurrent] = useState(0);
    const length = SLIDER_DATA.length;

    const nextSlide = useCallback(() => {
        setCurrent(current === length - 1 ? 0 : current + 1);
    }, [current, length]);

    const prevSlide = () => {
        setCurrent(current === 0 ? length - 1 : current - 1);
    };

    // Auto-advance
    useEffect(() => {
        const timer = setInterval(() => {
            nextSlide();
        }, 5000);
        return () => clearInterval(timer);
    }, [nextSlide]);

    if (!Array.isArray(SLIDER_DATA) || SLIDER_DATA.length <= 0) {
        return null;
    }

    return (
        <section className={carouselStyles.section}>
            <div className={carouselStyles.container}>
                <div className={carouselStyles.overflow}>
                    <div
                        className={carouselStyles.wrapper}
                        style={{ transform: `translateX(-${current * 100}%)` }}
                    >
                        {SLIDER_DATA.map((slide) => (
                            <div key={slide.id} className={carouselStyles.slide}>
                                <img src={slide.image} alt={slide.title} className={carouselStyles.image} />
                                <div className={carouselStyles.overlay}></div>

                                <div className={carouselStyles.content}>
                                    <h4 className={carouselStyles.subtitle}>{slide.subtitle}</h4>
                                    <h2 className={carouselStyles.title}>{slide.title}</h2>
                                    <p className={carouselStyles.description}>{slide.description}</p>
                                </div>
                            </div>
                        ))}
                    </div>

                    {/* Navigation Buttons */}
                    <div className={carouselStyles.buttonContainer}>
                        <button onClick={prevSlide} className={carouselStyles.navButton}>
                            <ChevronLeft size={20} />
                        </button>
                        <button onClick={nextSlide} className={carouselStyles.navButton}>
                            <ChevronRight size={20} />
                        </button>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default MinimalCarousel;
