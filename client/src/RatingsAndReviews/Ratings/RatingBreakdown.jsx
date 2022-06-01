/* eslint-disable max-len */
import React, { useContext, useEffect } from 'react';
import styled from 'styled-components';
import GlobalContext from '../../Context';

function RatingBreakdown(data) {
  const { allReviews } = data;
  const avgRating = (Math.round((allReviews.reduce((acc, review) => acc + review.rating, 0) / allReviews.length) * 10) / 10) || 0;
  const setCurrentRating = useContext(GlobalContext);
  const emptyStars = String.fromCodePoint(0x2606, 0x2606, 0x2606, 0x2606, 0x2606);
  const fullStars = String.fromCodePoint(0x2605, 0x2605, 0x2605, 0x2605, 0x2605);

  useEffect(() => {
    setCurrentRating.setCurrentRating(avgRating);
  }, []);

  return (
    <OuterWrapper>
      <Wrapper>
        <RatingWrapper>
          {avgRating}
        </RatingWrapper>
        <EmptyStars>{emptyStars}</EmptyStars>
        <FullStars starRating={avgRating * 20}>{fullStars}</FullStars>
      </Wrapper>
    </OuterWrapper>
  );
}

export default RatingBreakdown;

const FullStars = styled.div`
  width: ${(props) => props.starRating - 3}%;
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
  font-size: 14pt;
  color: #ECBE24;
`;

const OuterWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  padding-top: 3px;
`;

const RatingWrapper = styled.div`
  color: black;
  font-size: 70px;
  font-weight: 700;
`;
