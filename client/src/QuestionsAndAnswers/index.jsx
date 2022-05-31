import React, { useState, useEffect } from 'react';
import axios from 'axios';

import AddQuestion from './components/AddQuestion';
import QuestionList from './components/QuestionList';
import Search from './components/Search';

import GlobalContext from '../Context';

function QuestionsAndAnswers() {
  // search
  // question list
  // more questions
  // add a question

  const state = React.useContext(GlobalContext);

  // get questions from current product (global context)
  // right now, hardcoded current product
  const [currentQuestionList, setCurrentQuestionList] = useState([]);
  useEffect(() => {
    axios.get('/api/qa/questions', {
      params: {
        product_id: state.currentProduct.id,
      },
    })
      .then((response) => {
        setCurrentQuestionList(response.data.results);
      })
      .catch((err) => {
        console.log(err);
        setCurrentQuestionList([]);
      });
  }, [state]);

  return (
    <>
      <h3> Questions and Answers </h3>
      <Search list={currentQuestionList} filterFunction={setCurrentQuestionList} />
      <div>
        <QuestionList list={currentQuestionList} />
        <p> </p>
      </div>
      <div>
        <button type="button">more questions</button>
      </div>
      <div>
        <AddQuestion />
      </div>
    </>
  );
}

export default QuestionsAndAnswers;
