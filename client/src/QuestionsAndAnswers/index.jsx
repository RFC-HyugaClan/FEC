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
  const [fetchedQuestionsList, setFetchedQuestionsList] = useState([]);
  const [currentQuestionList, setCurrentQuestionList] = useState([]);
  useEffect(() => {
    axios.get('/api/qa/questions', {
      params: {
        product_id: state.currentProduct.id || 66643,
      },
    })
      .then((response) => {
        setFetchedQuestionsList(response.data.results);
        setCurrentQuestionList(response.data.results);
      })
      .catch((err) => {
        console.log(err);
        setFetchedQuestionsList([]);
        setCurrentQuestionList([]);
      });
  }, [state]);

  return (
    <>
      <h3> Questions and Answers </h3>
      <Search
        currentList={currentQuestionList}
        fetchedList={fetchedQuestionsList}
        filterFunction={setCurrentQuestionList}
      />
      <div>
        <QuestionList list={currentQuestionList} />
        <p> </p>
      </div>
      <div>
        <button type="button">more questions</button>
      </div>
      <div>
        <AddQuestion currentProduct={state.currentProduct.id} />
      </div>
    </>
  );
}

export default QuestionsAndAnswers;
