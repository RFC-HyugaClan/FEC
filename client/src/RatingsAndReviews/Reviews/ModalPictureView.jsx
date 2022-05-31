import React from 'react';
import styled from 'styled-components';

function ModalPictureView(data) {
  const { url, hideModal } = data;
  return (
    <Wrapper>
      <Modal src={`${url}`} onClick={() => hideModal()} />
    </Wrapper>
  );
}

export default ModalPictureView;

const Wrapper = styled.div`
  position: fixed;
  height: 100vh;
  width: 100vw;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background-color: rgba(0, 0, 0, .5);
`;

const Modal = styled.img`
  transition: opacity .2s ease;
  margin: auto;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  border-radius: 10px;
  max-height: 90%;

  box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
`;
