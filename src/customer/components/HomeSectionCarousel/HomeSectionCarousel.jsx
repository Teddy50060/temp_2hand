import React, { useState } from "react";
import AliceCarousel from "react-alice-carousel";
import "react-alice-carousel/lib/alice-carousel.css";
import HomeSectionCard from "../HomeSectionCard/HomeSectionCard.jsx";
import { Button } from "@mui/material";
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";

const HomeSectionCarousel = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const responsive = {
    0: { items: 1 }, // 1 card for very small screens
    720: { items: 3 }, // 3 cards for medium screens
    1024: { items: 5.5 }, // 5 cards for larger screens
  };

  const items = Array.from({ length: 12 }, (_, i) => (
    <HomeSectionCard key={i} />
  ));

  // Move to the next slide
  const slideNext = () => {
    setActiveIndex((prevIndex) => (prevIndex + 1) % items.length);
  };

  // Move to the previous slide
  const slideBack = () => {
    setActiveIndex((prevIndex) =>
      prevIndex - 1 < 0 ? items.length - 1 : prevIndex - 1
    );
  };

  // Sync state with carousel on slide change
  const syncActiveIndex = ({ item }) => setActiveIndex(item);

  return (
    <div style={{ position: "relative" }}>
      <AliceCarousel
        items={items}
        infinite
        disableButtonsControls
        responsive={responsive}
        activeIndex={activeIndex} // Controlled active index
        onSlideChanged={syncActiveIndex} // Synchronize state on change
      />
      <Button
        variant="contained"
        onClick={slideNext}
        sx={{
          position: "absolute",
          top: "30%", // Center vertically
          right: "1rem", // Adjust distance from the right edge
          transform: "translateY(-50%)", // Adjust for proper vertical alignment
          zIndex: 1000, // Ensure the button is above other elements
        }}
        aria-label="next"
      >
        <KeyboardArrowRightIcon />
      </Button>
      <Button
        variant="contained"
        onClick={slideBack}
        sx={{
          position: "absolute",
          top: "30%", // Center vertically
          left: "1rem", // Adjust distance from the left edge
          transform: "translateY(-50%)", // Adjust for proper vertical alignment
          zIndex: 1000, // Ensure the button is above other elements
        }}
        aria-label="back"
      >
        <KeyboardArrowRightIcon style={{ transform: "rotate(180deg)" }} />
      </Button>
    </div>
  );
};

export default HomeSectionCarousel;
