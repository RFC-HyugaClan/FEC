import React, {
  useState,
} from 'react';
import styled from 'styled-components';
import ModalPictureView from './ModalPictureView';

function Thumbnails(photos) {
  const { pictures } = photos;
  const [showModal, setPictureModal] = useState(false);
  const [photoUrl, setPhotoUrl] = useState('');

  const hideModal = () => {
    setPictureModal(false);
  };
  return (
    <>
      {showModal && <ModalPictureView url={photoUrl} hideModal={hideModal} />}
      {pictures.map((photo) => (
        <Wrapper key={photo.id}>
          <Thumbnail src={`${photo.url}`} onClick={() => { setPictureModal(true); setPhotoUrl(photo.url); }} />
        </Wrapper>
      ))}
    </>
  );
}

export default Thumbnails;

const Thumbnail = styled.img`
  &:hover{
    cursor: pointer;
}
  max-width: 100px;
  max-height: 100px;
  border-radius: 5px;
  margin: 5px;
  box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
`;

const Wrapper = styled.div`
  display: inline-block;
`;
