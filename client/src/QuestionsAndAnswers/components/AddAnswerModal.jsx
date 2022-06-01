import React, { useState, useEffect } from 'react';
import axios from 'axios';
import styled from 'styled-components';

const StyledButton = styled.button`
color: #0ABAB5;
font-size: 1em;
margin: 0 auto;
padding: 0.25em 1em;
border: 2px solid #0ABAB5;
border-radius: 3px;
`;

function AddAnswerModal(props) {
  const [show, setShow] = useState(false);
  const [values, setValues] = useState({
    name: '',
    body: '',
    email: '',
    photos: [],
  });
  const { currentQuestionID } = props;

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  function handleSubmit(e) {
    e.preventDefault();
    console.log('submitted!');
    console.log(values);

    axios.post(`api/qa/questions/${currentQuestionID}/answers`, {
      name: values.name,
      body: values.body,
      email: values.email,
      photos: values.photos,
    })
      .then((response) => {
        console.log(response);
      })
      .catch((error) => {
        console.log(error);
      });

    setShow(false);
  }

  const handleNameInputChange = (event) => {
    event.persist();
    setValues((values) => ({
      ...values,
      name: event.target.value,
    }));
  };
  const handleBodyInputChange = (event) => {
    event.persist();
    setValues((values) => ({
      ...values,
      body: event.target.value,
    }));
  };
  const handleEmailInputChange = (event) => {
    event.persist();
    setValues((values) => ({
      ...values,
      email: event.target.value,
    }));
  };

  return (
    <>
      <p> </p>
      <StyledButton type="button" onClick={handleShow}>add an answer</StyledButton>

      {show === true ? (
        <div>
          <form onSubmit={handleSubmit}>
            <label>
              name
              <input type="text" value={values.name} onChange={handleNameInputChange} />
            </label>
            <br />
            <label>
              answer
              <input type="text" value={values.body} onChange={handleBodyInputChange} />
            </label>
            <br />
            <label>
              email
              <input type="text" value={values.email} onChange={handleEmailInputChange} />
            </label>
            <input type="submit" value="submit" />
          </form>
          <button type="button" onClick={handleClose}>Close</button>
          <p> </p>
        </div>
      ) : <p> </p>}
    </>
  );
}

export default AddAnswerModal;
