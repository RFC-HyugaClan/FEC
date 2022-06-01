/* eslint-disable max-len */
import React from 'react';
import styled from 'styled-components';

function PercentRecommended(data) {
  const { allReviews } = data;
  const percentRecommended = allReviews.reduce((acc, review) => {
    let recc = 0;
    if (review.recommend === true) {
      recc = 1;
    }
    return acc + recc;
  }, 0);

  const totalPercent = Math.round((percentRecommended / allReviews.length) * 100);
  return (
    <Wrapper>
      {totalPercent}
      % of reviews recommend this product
    </Wrapper>
  );
}

export default PercentRecommended;

const Wrapper = styled.div`
  color: grey;
  padding-bottom: 15px;
`;
