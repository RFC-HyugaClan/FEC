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
  font-size: 30px;
  margin-left: 10px;
`;

const RecommendInput = styled.input`
  height: 20px;
  width: 20px;

`;

const RadioLabel = styled.label`
  margin-left: 10px;
`;
