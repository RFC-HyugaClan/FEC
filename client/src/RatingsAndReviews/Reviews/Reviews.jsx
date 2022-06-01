import React from 'react';
import styled from 'styled-components';
import ReviewsList from './ReviewsList';

function Reviews(data) {
  const { productId } = data;
  return (
    <Wrapper>
      <ReviewsList productId={productId} />
    </Wrapper>
  );
}

const Wrapper = styled.section`
  padding: 2px;
  flex-basis: 70%;
  margin: 2px;
`;

export default Reviews;
