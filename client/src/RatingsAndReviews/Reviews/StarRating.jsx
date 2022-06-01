import React from 'react';
import styled from 'styled-components';

function StarRating(ratings) {
  const { rating } = ratings;
  const emptyStars = String.fromCodePoint(0x2606, 0x2606, 0x2606, 0x2606, 0x2606);
  const fullStars = String.fromCodePoint(0x2605, 0x2605, 0x2605, 0x2605, 0x2605);
  return (
    <Wrapper>
      <EmptyStars>{emptyStars}</EmptyStars>
      <FullStars starRating={rating * 20}>{fullStars}</FullStars>
    </Wrapper>
  );
}

export default StarRating;

const FullStars = styled.div`
  width: ${(props) => props.starRating}%;
  grid-column: 1;
  grid-row: 1;
  overflow: hidden;
`;

const EmptyStars = styled.div`
  grid-column: 1;
  grid-row: 1;
`;

const Wrapper = styled.div`
  display: grid;
  font-size: 8pt;
  color: #ECBE24;
`;
