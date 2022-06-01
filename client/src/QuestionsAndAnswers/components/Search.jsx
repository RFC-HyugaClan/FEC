import React, { useState, useEffect } from 'react';
import styled from 'styled-components';

const StyledForm = styled.form`
  width: 100%;
  text-align:center;
  margin: 0 auto;
  display: block;
  margin-left: auto;
  margin-right: auto;
  position: relative;
`;

function Search(prop) {
  const { currentList, fetchedList, filterFunction } = prop;

  function handleChange(e) {
    // if more than 2 characters
    if (e.target.value.length > 2) {
      const results = [];

      for (let i = 0; i < currentList.length; i += 1) {
        // if the filter matches/ parse the question body
        for (let j = 0; j < currentList[i].question_body.length - e.target.value.length + 1; j += 1) {
          if (currentList[i].question_body.slice(j, j + e.target.value.length) === e.target.value) {
            // push to results array
            results.push(currentList[i]);
          }
        }
      }

      // set current questions currentList to filtered results
      filterFunction(results);
    } else {
      filterFunction(fetchedList);
    }
  }

  return (
    <StyledForm>
      <label>
        search
        <input type="text" name="search" onChange={handleChange}></input>
      </label>
    </StyledForm>
  );
}

export default Search;
