import React, { useState } from 'react';
import styled from 'styled-components';

function AddPicture(data) {
  const { photoUrls, setOpen, setPhotoUrls } = data;
  const [urls, setUrls] = useState('');
  return (
    <Wrapper>
      <URLLabel>Add URL: </URLLabel>
      <URLInput
        type="text"
        value={urls}
        onChange={(e) => setUrls(e.target.value)}
      />
      {photoUrls.length < 5 && (
      <Submit
        type="button"
        // eslint-disable-next-line no-shadow
        onClick={() => { setPhotoUrls((photoUrls) => [...photoUrls, urls]); setUrls(''); }}
      >
        Submit
      </Submit>
      )}
      <Close type="button" onClick={() => setOpen(false)}>Done</Close>
    </Wrapper>
  );
}

export default AddPicture;

const Wrapper = styled.section`

`;

const Close = styled.button`

`;

const Submit = styled.button`

`;

const URLInput = styled.input`
  border: 1px solid black;
  border-radius: 4px;
  width: 500px;
`;

const URLLabel = styled.label`

`;
