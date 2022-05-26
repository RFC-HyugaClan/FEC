import React from 'react';
import styled from 'styled-components';
import Rating from './components/Rating';
import Wrapper from '../Wrapper';

export default function ProductInfo({
  rating,
  category,
  title,
  price,
  salePrice,
  description
}) {
  return (
    <Wrapper>
      <Rating rating={rating} />
      <h2>{category}</h2>
      <h1>{title}</h1>
      <p>{price}</p>
      <p>{salePrice}</p>
      <p>{description}</p>
    </Wrapper>
  );
}

// Star Rating - avg rating based on reviews - 5 stars
// Read all [n of reviews] reviews should redirect to ratings and reviews. ONLY IF REVIEWS EXIST
// Add Prod Category and Title
// Get price from current style - may be on sale
// if Product Overview exists, display it.
// share link icons for FB Twitter Pinterest;

// props - name, rating, Category, title, price, salePrice - description