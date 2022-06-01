import React, { useState, useEffect } from 'react';
import axios from 'axios';
import styled from 'styled-components';

import AddQuestion from './components/AddQuestion';
import QuestionList from './components/QuestionList';
import Search from './components/Search';

import GlobalContext from '../Context';

const StyledTitle = styled.h3`
  background-color: #0ABAB5;
  color: white;
  width: 500px;
  text-align: center;
  margin: 0 auto;
  border: 2px grey`;

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
      <StyledTitle>Questions & Answers</StyledTitle>
      <Search
        currentList={currentQuestionList}
        fetchedList={fetchedQuestionsList}
        filterFunction={setCurrentQuestionList}
      />
      <div>
        <QuestionList list={currentQuestionList} />
        <p> </p>
      </div>
      {/* <div>
        <button type="button">more questions</button>
      </div> */}
      <div>
        <AddQuestion currentProduct={state.currentProduct.id} />
      </div>
    </>
  );
}

export default QuestionsAndAnswers;
