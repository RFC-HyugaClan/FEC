/* eslint-disable max-len */
import React, { useEffect, useRef, useState } from 'react';
import { createPortal } from 'react-dom';
import styled from 'styled-components';
import AddPicture from './AddPicture';

const RenderInWindow = (props) => {
  const [container, setContainer] = useState(null);
  const newWindow = useRef(window);

  useEffect(() => {
    const div = document.createElement('div');
    setContainer(div);
  }, []);

  // eslint-disable-next-line consistent-return
  useEffect(() => {
    if (container) {
      newWindow.current = window.open(
        '',
        '',
        'width=600,height=400,left=200,top=200',
      );
      newWindow.current.document.body.appendChild(container);
      const curWindow = newWindow.current;
      return () => curWindow.close();
    }
  }, [container]);

  return container && createPortal(props.children, container);
};

export default function App(data) {
  const { photoUrls, setPhotoUrls } = data;
  const [open, setOpen] = useState(false);
  return (
    <Wrapper>
      <AddPicBtn color="white" backgroundColor="blue" type="button" onClick={() => setOpen(true)}>Add Pictures</AddPicBtn>
      {open && <RenderInWindow><AddPicture setOpen={setOpen} setPhotoUrls={setPhotoUrls} photoUrls={photoUrls} /></RenderInWindow>}
    </Wrapper>
  );
}

const Wrapper = styled.section`

`;

const AddPicBtn = styled.button`
  &:hover{
    cursor: pointer;
  }
  background-color: ${(props) => props.backgroundColor};
  color: ${(props) => props.color};
  padding-top: 5px;
  margin: 1em;
  border: 2px;
  height: 50px;
  width: 100px;
  border-radius: 5px;
  box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
`;
