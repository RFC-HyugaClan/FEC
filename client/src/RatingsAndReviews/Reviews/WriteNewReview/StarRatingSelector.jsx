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
    <Wrapper>
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
              size={30}
              color={ratingValue <= (hover || rating) ? '#ffc107' : '#e4e5e9'}
              onMouseEnter={() => setHover(ratingValue)}
              onMouseLeave={() => setHover(null)}
            />
          </StarInput>
        );
      })}
      <RatingWrapper>
        {ratingLabel}
      </RatingWrapper>
    </Wrapper>
  );
}

export default StarRatingSelector;

const Wrapper = styled.div`
  font-size: 30px;
  margin: 5px;
  height: 10px;
`;

const RatingWrapper = styled.div`
  display: inline-block;
  margin-left: 10px;
`;

const StarRadio = styled.input`
  display: none;
`;

const StarInput = styled.label`
  vertical-align: middle;
  margin-left: 10px;
`;
