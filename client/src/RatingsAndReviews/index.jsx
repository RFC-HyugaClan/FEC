import React, { useState, useContext } from 'react';
import styled from 'styled-components';
import Reviews from './Reviews/Reviews';
import Ratings from './Ratings/Ratings';
import WriteNewReviewModal from './Reviews/WriteNewReview/WriteNewReviewModal';
import GlobalContext from '../Context';

function Fake() {
  const [reviewModal, setReviewModal] = useState(false);
  const productId = useContext(GlobalContext);

  return (
    <CenterWrapper id="RatingReviews">
      <Wrapper>
        <Ratings productId={productId.currentProduct.id} />
        <Reviews productId={productId.currentProduct.id} />
      </Wrapper>
      {reviewModal && <WriteNewReviewModal setReviewModal={setReviewModal} />}
      <ShowReviewModalBtn onClick={() => setReviewModal(true)}>Write a Review</ShowReviewModalBtn>
    </CenterWrapper>
  );
}

const Wrapper = styled.section`
  display: flex;
  flex-direction: row;
  width: 50vw;
  padding: 2px;
`;
const CenterWrapper = styled.section`
  display: flex;
  justify-content: center;
  font-family: Arial;
`;

export default Fake;

const ShowReviewModalBtn = styled.button`
  &:hover{
    cursor: pointer;
  }
  padding-top: 5px;
  margin: 1em;
  border: 2px;
  height: 50px;
  width: 100px;
  border-radius: 5px;
  box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
`;
