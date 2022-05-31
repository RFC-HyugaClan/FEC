import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import axios from 'axios';
import RatingBreakdown from './RatingBreakdown';

function Ratings(data) {
  const { productId } = data;
  const [allReviews, setAllReviews] = useState([]);
  console.log(productId);

  useEffect(() => {
    axios.get(`api/reviews/?product_id=${productId}&count=20&sort="helpful"`)
      .then((response) => {
        setAllReviews(response.data.results);
        return response;
      })
      .then((response) => console.log('Ratings Response: ', response));
  }, [productId]);

  return (
    <Wrapper>
      <RatingBreakdown allReviews={allReviews} />
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
