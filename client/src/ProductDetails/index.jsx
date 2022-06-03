import React, { useContext, useState, useEffect } from 'react';
import styled from 'styled-components';
import axios from 'axios';
import ImageGallery from './components/ImageGallery';
import ProductInfo from './components/ProductInfo';
import StyleSelector from './components/StyleSelector';
import AddToCart from './components/AddToCart';
import GlobalContext from '../Context';

const Wrapped = styled.div`
margin-right: 60px;
margin-left: 10px;
min-width: 300px;
max-width: 450px;
`;
export default function ProductDetails() {
  const { currentProduct, currentRating } = useContext(GlobalContext);
  const [styles, setStyles] = useState([]);
  const [currentStyle, setCurrentStyle] = useState({ photos: [{ url: './assets/loadingImg.webp' }], skus: { size: '10', quantity: '5' } });

  useEffect(() => {
    axios.get(`api/products/${currentProduct.id}/styles`)
      .then((response) => {
        setCurrentStyle(response.data.results[0]);
        setStyles(response.data.results);
      })
      .catch((error) => { throw error; });
  }, [currentProduct]);

  return (
    <div style={{
      display: 'flex',
      flexWrap: 'wrap',
      alignItems: 'center',
      justifyContent: 'space-around',
    }}
    >
      <ImageGallery
        items={currentStyle.photos}
      />
      <Wrapped>
        <ProductInfo
          title={currentProduct.name}
          rating={currentRating * 20}
          category={currentProduct.category}
          price={currentStyle.original_price}
          salePrice={currentStyle.sale_price}
          description={currentProduct.description}
        />
        <StyleSelector
          styles={styles}
          currentStyle={currentStyle}
          setCurrentStyle={setCurrentStyle}
        />
        <AddToCart cp={currentProduct} currentStyle={currentStyle} />
      </Wrapped>
    </div>
  );
}
//currentStyle.sale_price ||
// 0: {style_id: 411550, name: 'Black', original_price: '65.00', sale_price: null, default?: true, …}
// 1: {style_id: 411551, name: 'Olive Green', original_price: '65.00', sale_price: null, default?: false, …}
// 2:
// default?: false
// name: "Grey"
// original_price: "65.00"
// photos: Array(6)
// 0: {thumbnail_url: 'https://images.unsplash.com/photo-1459501462159-97…hcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=300&q=80', url: 'https://images.unsplash.com/photo-1459501462159-97…cHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1650&q=80'}
// 1: {thumbnail_url: 'https://images.unsplash.com/photo-1557804506-669a6…hcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=300&q=80', url: 'https://images.unsplash.com/photo-1557804506-669a6…cHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1567&q=80'}
// 2: {thumbnail_url: 'https://images.unsplash.com/photo-1553830591-2f39e…3c?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=80', url: 'https://images.unsplash.com/photo-1553830591-2f39e…c?ixlib=rb-1.2.1&auto=format&fit=crop&w=2760&q=80'}
// 3: {thumbnail_url: 'https://images.unsplash.com/photo-1553830591-d8632…ff?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=80', url: 'https://images.unsplash.com/photo-1553830591-d8632…f?ixlib=rb-1.2.1&auto=format&fit=crop&w=1511&q=80'}
// 4: {thumbnail_url: 'https://images.unsplash.com/photo-1526948128573-70…fa?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=80', url: 'https://images.unsplash.com/photo-1526948128573-70…a?ixlib=rb-1.2.1&auto=format&fit=crop&w=1650&q=80'}
// 5: {thumbnail_url: 'https://images.unsplash.com/photo-1554774853-d50f9…hcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=300&q=80', url: 'https://images.unsplash.com/photo-1554774853-d50f9…cHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1651&q=80'}
// length: 6
// [[Prototype]]: Array(0)
// sale_price: null
// skus: {2390441: {…}, 2390442: {…}, 2390443: {…}, 2390444: {…}, 2390445: {…}, 2390446: {…}}
// style_id: 411552
// [[Prototype]]: Object
// 3: {style_id: 411553, name: 'Tan', original_price: '65.00', sale_price: null, default?: false, …}
// 4: {style_id: 411554, name: 'Red', original_price: '65.00', sale_price: null, default?: false, …}
// 5: {style_id: 411555, name: 'Pinstripe', original_price: '65.00', sale_price: null, default?: false, …}
// 6: {style_id: 411556, name: 'Khaki', original_price: '65.00', sale_price: null, default?: false, …}
// 7: {style_id: 411557, name: 'Plaid', original_price: '65.00', sale_price: null, default?: false, …}
// 8: {style_id: 411558, name: 'White', original_price: '65.00', sale_price: null, default?: false, …}
// length: 9