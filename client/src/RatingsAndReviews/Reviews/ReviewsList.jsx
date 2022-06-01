/* eslint-disable max-len */
import React, {
  useState,
  useEffect,
} from 'react';
import axios from 'axios';
import styled from 'styled-components';
import Thumbnails from './Thumbnails';
import StarRating from './StarRating';
import UsernameDate from './UsernameDate';
import Summary from './Summary';
import Body from './Body';
import Helpfulness from './Helpfulness';
import Recommend from './Recommend';

function ReviewsList(data) {
  const { productId } = data;
  const [allReviews, setAllReviews] = useState([]);
  const [noReviewsToShow, setNoReviewsToShow] = useState(2);

  useEffect(() => {
    axios.get(`api/reviews/?product_id=${productId}&count=20&sort="helpful"`)
      .then((response) => {
        setAllReviews(response.data.results);
        return response;
      })
      .then((response) => console.log('Reviews Response: ', response));
  }, [productId]);

  return (
    <Wrapper>
      {allReviews.slice(0, noReviewsToShow).map((review) => (
        <div key={review.review_id}>
          <StarUsernameDateWrapper>
            <StarRating rating={review.rating} />
            <UsernameDate username={review.reviewer_name} date={review.date} />
          </StarUsernameDateWrapper>
          <Summary summaryText={review.summary} />
          <Body bodyText={review.body} />
          {review.recommend && <Recommend />}
          <Thumbnails pictures={review.photos} />
          <Helpfulness helpfulness={review.helpfulness} reviewId={review.review_id} />
        </div>
      ))}
      {allReviews.length > noReviewsToShow && <ShowMoreReviewsBtn onClick={() => setNoReviewsToShow(noReviewsToShow + 2)}>Show More Reviews</ShowMoreReviewsBtn>}
    </Wrapper>
  );
}

// overflow may allow for scrolling

const StarUsernameDateWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  padding-top: 3px;
`;

const ShowMoreReviewsBtn = styled.button`
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

const Wrapper = styled.div`
  min-width: 700px;
  max-height: 500px;
  overflow: auto;
`;

export default ReviewsList;
