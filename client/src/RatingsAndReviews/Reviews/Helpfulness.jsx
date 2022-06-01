/* eslint-disable max-len */
import React, { useState } from 'react';
import styled from 'styled-components';
import axios from 'axios';

function Helpfulness(data) {
  const { helpfulness, reviewId } = data;
  const [disableHelp, setDisableHelp] = useState(false);
  const [helpTrack, setHelpTrack] = useState(0);
  // eslint-disable-next-line consistent-return
  function selectHelpful() {
    if (disableHelp) {
      return null;
    }
    axios.put(`api/reviews/${reviewId}/helpful`)
      .then((response) => response)
      .catch((err) => err);
  }
  return (
    <Wrapper>
      Helpful?
      <YesNo onClick={() => { selectHelpful(); setDisableHelp(true); setHelpTrack(1); }} disabled={disableHelp}>{disableHelp ? 'Thanks!' : 'Yes'}</YesNo>
      (
      {(helpfulness + helpTrack)}
      )
      <No>No</No>
    </Wrapper>
  );
}

export default Helpfulness;

const Wrapper = styled.div`
  display: flex;
  font-weight: 400
  font-size: 10px;
  flex-wrap: wrap;
  color: #909090;
  padding: 2px;
  border-bottom: 2px solid #626161;
`;

const YesNo = styled.button`
  &:hover{
    cursor: pointer;
}
  color: #909090;
  border: none;
  font-size: 15px;
  background: none;
  padding-left: 2px;
  padding-right: 2px;
`;

const No = styled.div`
  padding-left: 2px;
  padding-right: 2px;
`;
