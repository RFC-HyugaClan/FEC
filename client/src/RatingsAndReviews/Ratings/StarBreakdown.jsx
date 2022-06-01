import React from 'react';
import styled from 'styled-components';

function StarBreakdown(data) {
  const { allReviews } = data;
  const ratingCount = {
    1: 0,
    2: 0,
    3: 0,
    4: 0,
    5: 0,
  };

  allReviews.forEach((review) => { ratingCount[review.rating] += 1; });

  return (
    <Wrapper>
      <RatingWrapper>
        5 Star
        {'  '}
        <Bars rating={(ratingCount[5] / (allReviews.length || 1)) * 100} />
      </RatingWrapper>
      <RatingWrapper>
        4 Star
        {'  '}
        <Bars rating={(ratingCount[4] / (allReviews.length || 1)) * 100} />
      </RatingWrapper>
      <RatingWrapper>
        3 Star
        {'  '}
        <Bars rating={(ratingCount[3] / (allReviews.length || 1)) * 100} />
      </RatingWrapper>
      <RatingWrapper>
        2 Star
        {'  '}
        <Bars rating={(ratingCount[2] / (allReviews.length || 1)) * 100} />
      </RatingWrapper>
      <RatingWrapper>
        1 Star
        {'  '}
        <Bars rating={(ratingCount[1] / (allReviews.length || 1)) * 100} />
      </RatingWrapper>
    </Wrapper>
  );
}

export default StarBreakdown;

const Wrapper = styled.div`
  user-select: none;
`;

const RatingWrapper = styled.div`
  font-size: 20px;
  color: #6c6c6c;
  padding-right: 5px;
`;

const Bars = styled.div`
  display: inline-block;
  width: ${(props) => props.rating + 20}%;
  height: 17px;
  background-color: #0ABAB5;
  padding-left: 5px;
`;
