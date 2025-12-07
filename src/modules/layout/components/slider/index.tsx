import { useEffect, useState } from 'react';
import { Dot, DotsContainer, Slide, SlideImage, SliderContainer, SliderWrapper } from './styled';

const SLIDER_IMAGES = [
  '/slider-images/alone-boy.png',
  '/slider-images/concert.png',
  '/slider-images/small-boy.png',
];

const AUTO_SLIDE_INTERVAL = 5000; // 5 seconds

const Slider = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex(prevIndex => (prevIndex + 1) % SLIDER_IMAGES.length);
    }, AUTO_SLIDE_INTERVAL);

    return () => clearInterval(interval);
  }, []);

  const handleDotClick = (index: number) => {
    setCurrentIndex(index);
  };

  const translateX = currentIndex * (100 / SLIDER_IMAGES.length);

  return (
    <SliderContainer>
      <SliderWrapper translateX={translateX}>
        {SLIDER_IMAGES.map((image, index) => (
          <Slide key={image}>
            <SlideImage src={image} alt={`Slide ${index + 1}`} />
          </Slide>
        ))}
      </SliderWrapper>
      <DotsContainer>
        {SLIDER_IMAGES.map((image, index) => (
          <Dot
            key={image}
            active={index === currentIndex}
            onClick={() => handleDotClick(index)}
            role='button'
            tabIndex={0}
            onKeyDown={e => {
              if (e.key === 'Enter' || e.key === ' ') {
                handleDotClick(index);
              }
            }}
          />
        ))}
      </DotsContainer>
    </SliderContainer>
  );
};

export default Slider;
