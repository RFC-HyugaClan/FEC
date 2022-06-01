import React from 'react';
import styled from 'styled-components';

function Chacteristics(data) {
  const { charRatings } = data;
  // .Fit, .Length. .Comfort .Quality .Size .Width
  return (
    <Wrapper>
      {charRatings.Fit && (
        <Wrapper />
      )}
    </Wrapper>
  );
}

export default Chacteristics;

const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
`;

const CharDesc = styled.div`

`;

const Bars = styled.div`
  width: 25%;
  height: 6px;
  background-color: #b8b8b8;
  margin: 2px;
  border-radius: 2px;
`;
