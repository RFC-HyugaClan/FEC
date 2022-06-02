import React from 'react';
import styled from 'styled-components';

function Summary(summary) {
  const { summaryText } = summary;
  return (
    <Wrapper>
      {summaryText}
    </Wrapper>
  );
}

export default Summary;

const Wrapper = styled.div`
    display: block;
    color: #000000;
    font-weight: 900;
    font-size: 20px;
    padding-bottom: 5px;
  `;
