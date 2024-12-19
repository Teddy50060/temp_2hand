import React from 'react';
import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';
import MainCarouselData from './MainCarouselData'; // Adjust the path as needed

const MainCarousel = () => {
  // Map MainCarouselData to create carousel items
  const items = MainCarouselData.map((data) => (
    <div className="item" key={data.id}>
      <img
        src={data.imageSrc}
        alt={data.altText}
        style={{ width: '100%', height: 'auto', objectFit: 'cover' }}
      />
    </div>
  ));

  return (
    <AliceCarousel
      autoWidth
      infinite
      mouseTracking
      items={items}
    />
  );
};

export default MainCarousel;
