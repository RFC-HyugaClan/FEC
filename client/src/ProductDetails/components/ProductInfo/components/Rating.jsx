import React from 'react';
import styled from 'styled-components';

const Stars = styled.div`
  margin-top: 15px;
  position: relative;
  vertical-align: middle;
  display: inline-block;
  color: #ECBE24;
`;
const EmptyStar = styled.div`
  font-size: 16pt;
`;
const FullStar = styled.div`
  position: absolute;
  left: 0;
  top: 0;
  width: 50%;
  white-space: nowrap;
  overflow: hidden;
  font-size: 16pt;
`;

export default function Rating({ rating }) {
  return (
    <Stars>
      <EmptyStar>&#x2606;&#x2606;&#x2606;&#x2606;&#x2606;</EmptyStar>
      <FullStar rating={rating}>&#x2605;&#x2605;&#x2605;&#x2605;&#x2605;</FullStar>
    </Stars>
  );
}
