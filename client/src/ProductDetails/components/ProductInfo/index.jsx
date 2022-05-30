import React from 'react';
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { brands } from '@fortawesome/fontawesome-svg-core/import.macro';
import Rating from './components/Rating';

export default function ProductInfo({
  rating,
  category,
  title,
  price,
  salePrice,
  description,
}) {
  return (
    <div>
      <Rating rating={rating} />
      <span style={{ position: 'relative', top: '10px', marginLeft: '5px' }}><a href="#RatingReviews">Read All Reviews</a></span>
      <p>{category}</p>
      <h1>{title}</h1>
      <div>
        {
          salePrice ? (
            <div>
              <s>
                $
                {price}
                &nbsp;
              </s>
              <span style={{ color: 'red' }}>
                $
                {salePrice}
              </span>
            </div>
          )
            : (
              <h3>
                $
                {price}
              </h3>
            )
      }
      </div>
      <p>{description}</p>
      <div style={{ display: 'flex', justifyContent: 'space-around' }}>
        <a aria-label="facebook link" href="https://facebook.com"><FontAwesomeIcon size="2x" icon={brands('facebook-square')} /></a>
        <a aria-label="twitter link" href="https://twitter.com/"><FontAwesomeIcon size="2x" icon={brands('twitter')} /></a>
        <a aria-label="pinterest link" href="https://www.pinterest.com/"><FontAwesomeIcon size="2x" icon={brands('pinterest-square')} /></a>
      </div>
    </div>
  );
}
ProductInfo.propTypes = {
  rating: PropTypes.number,
  category: PropTypes.string,
  title: PropTypes.string,
  price: PropTypes.string,
  salePrice: PropTypes.string,
  description: PropTypes.string,
};
ProductInfo.defaultProps = {
  rating: 0,
  category: 'Unknown',
  title: 'Unknown',
  price: 'N/A',
  salePrice: null,
  description: null,
};

// share link icons for FB Twitter Pinterest
