import React from 'react';
import styled from 'styled-components';

function Body(body) {
  const { bodyText } = body;
  return (
    <Wrapper>
      {bodyText}
    </Wrapper>
  );
}

export default Body;

const Wrapper = styled.div`
  font-weight: 400
  font-size: 15px;
  flex-wrap: wrap;
  color: #909090;
`;
