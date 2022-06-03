import React from 'react';
import styled from 'styled-components';

function Thumbnails(data) {
  const { photoUrls } = data;
  return (
    <Wrapper>
      {photoUrls.map((thumbnail) => (
        <Thumbnail key={thumbnail} src={`${thumbnail}`} />
      ))}
    </Wrapper>
  );
}

export default Thumbnails;

const Wrapper = styled.div`
  display: inline-block;
`;

const Thumbnail = styled.img`
  max-width: 100px;
  max-height: 100px;
  border-radius: 5px;
  margin: 10px;
  box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
`;
