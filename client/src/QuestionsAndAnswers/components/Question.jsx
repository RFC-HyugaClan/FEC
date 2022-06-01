import React from 'react';
import axios from 'axios';
import Answer from './Answer';
import AddAnswerModal from './AddAnswerModal';

function Question(prop) {
  const { question } = prop;
  const answersList = Object.keys(question.answers);

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
    <>
      <p> </p>
      <div style={{ color: 'blue' }}>
        name: {question.asker_name}
      </div>
      <div>
        q: {question.question_body}
      </div>
      <div>
        date: {question.question_date}
      </div>
      <button onClick={handleHelpfulClick} type="button">helpful: {question.question_helpfulness}</button>
      <AddAnswerModal currentQuestionID={question.question_id} />
      <button onClick={handleReportClick} type="button">report question</button>
      {answersList.length > 0
        ? answersList.map((answer) => <Answer key={question.answers[answer].id} answer={question.answers[answer]}/>)
        : <div style={{ color: 'red' }}>no answers for this question</div>}
    </>
  );
}

export default Question;
