/* eslint-disable max-len */
import React, {
  useState,
} from 'react';
import styled from 'styled-components';
import { FaStar } from 'react-icons/fa';

function StarRatingSelector(data) {
  const { rating, setRating } = data;
  // const [rating, setRating] = useState(null);
  const [hover, setHover] = useState(null);
  const [ratingLabel, setRatingLabel] = useState('');
  function ratingCondition(starRating = null) {
    if (starRating === null) {
      setRatingLabel('');
    }
    if (starRating === 1) {
      setRatingLabel('Poor');
    }
    if (starRating === 2) {
      setRatingLabel('Fair');
    }
    if (starRating === 3) {
      setRatingLabel('Average');
    }
    if (starRating === 4) {
      setRatingLabel('Good');
    }
    if (starRating === 5) {
      setRatingLabel('Great');
    }
  }
  return (
    <div>
      Your Overall Rating:
      {[...Array(5)].map((star, index) => {
        const ratingValue = index + 1;
        return (
          <StarInput key={`starRating${ratingValue}`}>
            <StarRadio
              type="radio"
              name="rating"
              value={ratingValue}
              onClick={() => { setRating(ratingValue); ratingCondition(ratingValue); }}
            />
            <FaStar
              size={20}
              color={ratingValue <= (hover || rating) ? '#ffc107' : '#e4e5e9'}
              onMouseEnter={() => setHover(ratingValue)}
              onMouseLeave={() => setHover(null)}
            />
          </StarInput>
        );
      })}
      {ratingLabel}
    </div>
  );
}

export default StarRatingSelector;

const StarRadio = styled.input`
  display: none;
`;

const StarInput = styled.label`

`;
