import React, { useState, useEffect } from 'react';

function Search(prop) {
  const { list, filterFunction } = prop;

  // const exampleQuestion = {
  //   answers: {},
  //   asker_name: "eeeeerrrrqqqq",
  //   question_body: "do it be hitting?",
  //   question_date: "2022-05-31T00:00:00.000Z",
  //   question_helpfulness: 133,
  //   question_id: 2814,
  //   reported: false,
  // };

  function handleChange(e) {
    // if more than 2 characters
    if (e.target.value.length > 2) {
      const results = [];

      for (let i = 0; i < list.length; i += 1) {
        console.log(list[i]);
        console.log(list[i].question_body);
        // if the filter matches/ parse the question body
        for (let j = 0; j < list[i].question_body.length - e.target.value.length; j += 1) {
          if (list[i].question_body.slice(j, j + e.target.value.length) === e.target.value) {
            // push to results array
            results.push(list[i]);
          }
        }
      }

      // set current questions list to filtered results
      filterFunction(results);
    }
  }

  return (
    <form>
      <label>
        search
        <input type="text" name="search" onChange={handleChange} />
      </label>
    </form>
  );
}

export default Search;
