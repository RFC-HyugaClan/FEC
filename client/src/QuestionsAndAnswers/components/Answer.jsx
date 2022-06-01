import React from 'react';
import axios from 'axios';

function Answer(prop) {
  const { answer } = prop;

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
    <>
      <p> </p>
      <div style={{ color: 'red' }}>
        name: {answer.answerer_name}
      </div>
      <div>
        a: {answer.body}
      </div>
      <div>
        date: {answer.date}
      </div>
      <div onClick={handleHelpfulClick}>
        helpful: {answer.helpfulness}
      </div>
      <button onClick={handleReportClick} type="button">report answer</button>
    </>
  );
}

export default Answer;
