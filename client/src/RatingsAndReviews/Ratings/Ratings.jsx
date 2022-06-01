import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import axios from 'axios';
import RatingBreakdown from './RatingBreakdown';
import PercentRecommended from './PercentRecommended';
import StarBreakdown from './StarBreakdown';
import Characteristics from './Characteristics';

function Ratings(data) {
  const { productId } = data;
  const [allReviews, setAllReviews] = useState([]);
  const [charRatings, setCharRatings] = useState({});

  useEffect(() => {
    axios.get(`api/reviews/?product_id=${productId}&count=20&sort="helpful"`)
      .then((response) => {
        setAllReviews(response.data.results);
        return response;
      })
      .then((response) => console.log('Ratings Response: ', response));

    axios.get(`api/reviews/meta/?product_id=${productId}`)
      .then((response) => {
        console.log('Ratings Chars Response: ', response.data.characteristics);
        return response;
      })
      .then((response) => {
        Object.keys(response.data.characteristics).map((key) => {
          // eslint-disable-next-line no-shadow
          setCharRatings((charID) => ({
            ...charID,
            [key]: response.data.characteristics[key].value,
          }));
          return null;
        });
        return response;
      });
  }, [productId]);

  return (
    <Wrapper>
      <RatingBreakdown allReviews={allReviews} />
      <PercentRecommended allReviews={allReviews} />
      <StarBreakdown allReviews={allReviews} />
      <Characteristics charRatings={charRatings} />
    </Wrapper>
  );
}

const Wrapper = styled.section`
  min-width: 300px;
  padding: 2px;
  flex-basis: 30%;
  margin: 2px;
`;

export default Ratings;
