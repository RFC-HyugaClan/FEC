import React from 'react';
import styled from 'styled-components';

function Summary(data) {
  const { summary, setSummary } = data;
  return (
    <Wrapper>
      <SumLabel>Summary:</SumLabel>
      <SumInput
        type="text"
        value={summary}
        placeholder="Example: Best purchase ever!"
        onChange={(e) => setSummary(e.target.value)}
      />
      {summary.length > 60 ? (
        <ConstraintChecker color="red">
          Max characters
          {' '}
          {summary.length}
          {' '}
          / 60...
        </ConstraintChecker>
      ) : (
        <ConstraintChecker color="green">
          {60 - summary.length}
          {' '}
          characters remaining...
        </ConstraintChecker>
      )}
    </Wrapper>
  );
}

export default Summary;

const Wrapper = styled.div`
  margin-left: 10px;

`;

const SumInput = styled.input`
  border: 1px solid black;
  border-radius: 4px;
  width: 500px;
`;

const SumLabel = styled.label`
  padding-right: 10px;
  font-size: 20px;
`;

const ConstraintChecker = styled.div`
  color: ${(props) => props.color};
  font-size: 8px;
  font-style: italic;
  margin-left: 102px;
`;
