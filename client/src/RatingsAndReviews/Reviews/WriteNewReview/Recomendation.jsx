import React from 'react';
import styled from 'styled-components';

function Recommendation(data) {
  const { setRecommend } = data;
  return (
    <Wrapper>
      Do you recommend this product?
      <RadioLabel>Yes</RadioLabel>
      <RecommendInput
        type="radio"
        name="recommend"
        onClick={() => setRecommend(true)}
      />
      <RadioLabel>No</RadioLabel>
      <RecommendInput
        type="radio"
        name="recommend"
        onClick={() => setRecommend(false)}
      />
    </Wrapper>
  );
}

export default Recommendation;

const Wrapper = styled.form`

`;

const RecommendInput = styled.input`

`;

const RadioLabel = styled.label`

`;
