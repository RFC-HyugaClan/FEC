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
  const [currentProduct, setCurrentProduct] = useState({});
  useEffect(() => {
    // GET /products/:product_id
    axios.get('/api/products/66645')
      .then((response) => {
        // console.log(response.data)
        setCurrentProduct(response.data);
      })
      .catch((err) => {
        console.log(err)
        setCurrentProduct({});
      });
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
