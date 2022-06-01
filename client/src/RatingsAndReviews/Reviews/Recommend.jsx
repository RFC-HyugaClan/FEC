import React from 'react';
import styled from 'styled-components';
import { FaCheck } from 'react-icons/fa';

function Recommend() {
  return (
    <Wrapper>
      {/* <ChkWrapper><FontAwesomeIcon icon={faCheck} /></ChkWrapper> */}
      <ChkWrapper><FaCheck /></ChkWrapper>
      I recommend this product.
    </Wrapper>
  );
}

export default Recommend;

const Wrapper = styled.div`

`;

const ChkWrapper = styled.div`
  display: inline-block;
  padding-right: 2px;
  padding-left: 2px;
  color: #30fc03
`;
