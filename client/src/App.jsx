import React, {
  useState,
  useEffect,
  useMemo,
} from 'react';
import axios from 'axios';
import ProductDetails from './ProductDetails';
import QuestionsAndAnswers from './QuestionsAndAnswers';
import RelatedItems from './RelatedItems';
import RatingsAndReviews from './RatingsAndReviews';
import GlobalContext from './Context';

function App() {
  // Product Details
  // Related Products
  // Questions and Answers
  // Ratings and Reviews

  const [currentProduct, setCurrentProduct] = useState({});
  useEffect(() => {
    // GET /products/:product_id
    axios.get('/products/:1')
      .then((response) => {
        setCurrentProduct(response.data);
      })
      .catch(() => setCurrentProduct({}));
  }, []);

  const state = useMemo(() => ({ currentProduct, setCurrentProduct }), [currentProduct]);
  return (
    <GlobalContext.Provider value={state}>
      <ProductDetails />
      <RelatedItems />
      <QuestionsAndAnswers />
      <RatingsAndReviews />
    </GlobalContext.Provider>
  );
}

export default App;
