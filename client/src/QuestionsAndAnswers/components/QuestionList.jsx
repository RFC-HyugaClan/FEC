import React from 'react';
import Question from './Question';

function QuestionList(prop) {
  const { list } = prop;

  return (
    <>
      {list.length > 0
        ? list.map((question) => <Question key={question.question_id} question={question} />)
        : <div>empty</div>}
    </>
  );
}

export default QuestionList;
