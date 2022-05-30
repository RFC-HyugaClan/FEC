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
    axios.get('/api/products/66649')
      .then((response) => {
        console.log("🚀 ~ file: App.jsx ~ line 19 ~ .then ~ response", response)
        setCurrentProduct(response.data);
      })
      .catch((err) => {
        console.log("🚀 ~ file: App.jsx ~ line 23 ~ useEffect ~ err", err)
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
