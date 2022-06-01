import React from 'react';
import axios from 'axios';
import styled from 'styled-components';
import { format, formatDistance, formatRelative, subDays } from 'date-fns';

const StyledWrapper = styled.div`
  width: 500px;
  margin: 0 auto;
  border: 1px grey;
  border-style: solid;`;

const StyledDiv = styled.div`
  background-color: #b5e8e8;
  font-family: "Lucida Console", "Courier New", monospace;
  `;

const StyledDivRight = styled.div`
  background-color: #b5e8e8;
  font-family: "Lucida Console", "Courier New", monospace;
  text-align: right;
  `;

function Answer(prop) {
  const { answer } = prop;
  const answerDate = new Date(answer.date);

  function handleHelpfulClick() {
    console.log(answer.id);
    axios.put(`/api/qa/answers/${answer.id}/helpful`, {
      params: {
        answer_id: answer.id,
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
    axios.put(`/api/qa/answers/${answer.id}/report`, {
      params: {
        answer_id: answer.id,
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
        name: {answer.answerer_name}
      </StyledDiv>
      <StyledDiv>
        A: {answer.body}
      </StyledDiv>
      <StyledDivRight>
        {format(answerDate, 'MMMM dd, yyyy')}
      </StyledDivRight>
      <button onClick={handleHelpfulClick} type="button">helpful: {answer.helpfulness}</button>
      <button onClick={handleReportClick} type="button">report answer</button>
    </StyledWrapper>
  );
}

export default Answer;
