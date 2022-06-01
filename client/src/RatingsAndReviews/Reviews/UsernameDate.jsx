import React from 'react';
import styled from 'styled-components';
import { format } from 'date-fns';

function UsernameDate(data) {
  const { username, date } = data;
  return (
    <Wrapper>
      <Username>
        {username}
        ,
        {' '}
        {format(new Date(date), 'MMMM d, yyyy') }
      </Username>
    </Wrapper>
  );
}

export default UsernameDate;

const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
`;

const Username = styled.span`
  display: inline-block;
  font-weight: 300;
  font-size: 10px;
  color: #909090;
  float: right;
`;
