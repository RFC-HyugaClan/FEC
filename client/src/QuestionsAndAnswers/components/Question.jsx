import React from 'react';
import axios from 'axios';
import styled from 'styled-components';
import format from 'date-fns';

import Answer from './Answer';
import AddAnswerModal from './AddAnswerModal';

const StyledDiv = styled.div`
background-color: #0ABAB5;
font-family: "Lucida Console", "Courier New", monospace;
`;

const StyledDivRight = styled.div`
  background-color: #0ABAB5;
  font-family: "Lucida Console", "Courier New", monospace;
  text-align: right;
  `;

const StyledWrapper = styled.div`
  width: 500px;
  margin: 0 auto;
  border: 1px grey;
  border-style: solid;`;

function Question(prop) {
  const { question } = prop;
  const answersList = Object.keys(question.answers);

  const questionDate = new Date(question.question_date);
  const qAnswers = question.answers;

  function handleHelpfulClick() {
    console.log(question.question_id);
    axios.put(`/api/qa/questions/${question.question_id}/helpful`, {
      params: {
        question_id: question.question_id,
      },
    })
      .then((response) => {
        console.log(response);
      })
      .catch((err) => {
        console.log(err);
      });
  }

  function handleReportClick() {
    console.log(question.question_id);
    axios.put(`/api/qa/questions/${question.question_id}/report`, {
      params: {
        question_id: question.question_id,
      },
    })
      .then((response) => {
        console.log(response);
      })
      .catch((err) => {
        console.log(err);
      });
  }

  return (
    <StyledWrapper>
      <StyledDiv>
        name:
        {question.asker_name}
      </StyledDiv>
      <StyledDiv>
        Q:
        {question.question_body}
      </StyledDiv>
      <StyledDivRight>
        {format(questionDate, 'MMMM dd, yyyy')}
      </StyledDivRight>
      <AddAnswerModal currentQuestionID={question.question_id} />
      <button onClick={handleHelpfulClick} type="button">
        helpful:
        {question.question_helpfulness}
      </button>
      <button onClick={handleReportClick} type="button">report question</button>
      {answersList.length > 0
        ? answersList.map((answer) => <Answer key={qAnswers[answer].id} a={qAnswers[answer]} />)
        : <StyledDiv>no answers for this question</StyledDiv>}
    </StyledWrapper>
  );
}

export default Question;
