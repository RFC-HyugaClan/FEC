import React, { useState, useEffect } from 'react';
import axios from 'axios';

function AddQuestion(props) {
  const [show, setShow] = useState(false);
  const [values, setValues] = useState({
    name: '',
    body: '',
    email: '',
  });
  const { currentProduct } = props;

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  function handleSubmit(e) {
    e.preventDefault();
    console.log('submitted!');
    console.log(values);

    axios.post('api/qa/questions', {
      name: values.name,
      body: values.body,
      email: values.email,
      product_id: currentProduct,
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
      <button type="button" onClick={handleShow}>add a question</button>

      {show === true ? (
        <div>
          <form onSubmit={handleSubmit}>
            <label>
              name
              <input type="text" value={values.name} onChange={handleNameInputChange} />
            </label>
            <br />
            <label>
              question
              <input type="text" value={values.body} onChange={handleBodyInputChange} />
            </label>
            <br />
            <label>
              email
              <input type="text" value={values.email} onChange={handleEmailInputChange} />
            </label>
            <br />
            <input type="submit" value="submit" />
          </form>
          <button type="button" onClick={handleClose}>Close</button>
        </div>
      ) : <p> </p>}
    </>
  );
}

export default AddQuestion;
