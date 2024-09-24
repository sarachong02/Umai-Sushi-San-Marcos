import React from 'react';
import { FaStar, FaStarHalfAlt, FaRegStar } from 'react-icons/fa';  // Import star icons from react-icons

const RatingComponent = ({ rating, totalRatings }) => {
  // Function to render stars based on rating
  const renderStars = () => {
    const fullStars = Math.floor(rating);
    const hasHalfStar = rating % 1 !== 0;
    const emptyStars = 5 - fullStars - (hasHalfStar ? 1 : 0);

    return (
      <>
        {[...Array(fullStars)].map((_, index) => (
          <FaStar key={index} color="gold" />
        ))}
        {hasHalfStar && <FaStarHalfAlt color="gold" />}
        {[...Array(emptyStars)].map((_, index) => (
          <FaRegStar key={index} color="gold" />
        ))}
      </>
    );
  };

  return (
    <div style={{ textAlign: 'center', fontFamily: 'Arial' }}>
      <div style={{ fontSize: '2em', fontWeight: 'bold' }}>{rating}</div>
      <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
        {renderStars()}
      </div>
      <div style={{ fontSize: '1em', marginTop: '8px' }}>{totalRatings}+ Ratings</div>
    </div>
  );
};

export default RatingComponent;
