import React, { useState, useEffect } from 'react';
import { heroSliderStyles } from '../assets/dummyStyles';
import { SLIDER_DATA } from '../assets/dummywdata';
import { ChevronLeft, ChevronRight, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const HeroSlider = () => {
    const [current, setCurrent] = useState(0);
    const length = SLIDER_DATA.length;

    const nextSlide = React.useCallback(() => {
        setCurrent(prev => (prev === length - 1 ? 0 : prev + 1));
    }, [length]);

    const prevSlide = () => {
        setCurrent(prev => (prev === 0 ? length - 1 : prev - 1));
    };

    // Auto-advance
    useEffect(() => {
        const timer = setInterval(() => {
            nextSlide();
        }, 6000);
        return () => clearInterval(timer);
    }, [nextSlide]);

    if (!Array.isArray(SLIDER_DATA) || SLIDER_DATA.length <= 0) {
        return null;
    }

    return (
        <section className={heroSliderStyles.section}>
            <div className={heroSliderStyles.wrapper}>
                {SLIDER_DATA.map((slide, index) => (
                    <div
                        key={slide.id}
                        className={`${heroSliderStyles.slide} ${index === current ? heroSliderStyles.slideActive : heroSliderStyles.slideInactive
                            }`}
                    >
                        <img src={slide.image} alt={slide.title} className={heroSliderStyles.image} />
                        <div className={heroSliderStyles.overlay}></div>

                        <div className={heroSliderStyles.contentContainer}>
                            <div className={heroSliderStyles.content}>
                                <h4 className={heroSliderStyles.subtitle}>{slide.subtitle}</h4>
                                <h1 className={heroSliderStyles.title}>{slide.title}</h1>
                                <p className={heroSliderStyles.description}>{slide.description}</p>

                                <Link to="/products" className={heroSliderStyles.button}>
                                    Shop Collection
                                    <ArrowRight className={heroSliderStyles.buttonArrow} />
                                </Link>
                            </div>
                        </div>
                    </div>
                ))}

                {/* Navigation Buttons */}
                <div className={heroSliderStyles.navContainer}>
                    <button onClick={prevSlide} className={heroSliderStyles.navButton}>
                        <ChevronLeft size={24} />
                    </button>
                    <button onClick={nextSlide} className={heroSliderStyles.navButton}>
                        <ChevronRight size={24} />
                    </button>
                </div>
            </div>
        </section>
    );
};

export default HeroSlider;
