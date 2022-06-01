import React, {useContext, useState, useEffect} from 'react'
import ImageGallery from './components/ImageGallery';
import Wrapper from './components/Wrapper';
import GlobalContext from '../Context';
import axios from 'axios';

export default function ProductDetails() {
  const {currentProduct} = useContext(GlobalContext);
  const [styles, setStyles] = useState([])
  const [currentStyle, setCurrentStyle] = useState({photos: [{url:'https://images.unsplash.com/photo-1554774853-d50f9c681ae2?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1651&q=80'}]});

  useEffect(_=> {
    axios.get(`api/products/${currentProduct.id}/styles`)
      .then(response => {
        setCurrentStyle(response.data.results[0]);
        setStyles(response.data.results);
      })
      .catch(error => console.log(error))
  }, [currentProduct])

  return (
    <Wrapper>
      <ImageGallery items={currentStyle.photos} />
    </Wrapper>
  )
}

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