import React from 'react';
import styled from 'styled-components';

function Body(data) {
  const { body, setBody } = data;
  return (
    <Wrapper>
      <BodyLabel>Body:</BodyLabel>
      <BodyInput
        type="text"
        rows="2"
        value={body}
        placeholder="Example: Best purchase ever!"
        onChange={(e) => setBody(e.target.value)}
      />
      {body.length > 1000 ? (
        <ConstraintChecker color="red">
          Max characters
          {' '}
          {body.length}
          {' '}
          / 60...
        </ConstraintChecker>
      ) : (
        <ConstraintChecker color="green">
          {1000 - body.length}
          {' '}
          characters remaining...
        </ConstraintChecker>
      )}
    </Wrapper>
  );
}

export default Body;

const Wrapper = styled.div`

`;

const BodyInput = styled.textarea`
  border: 1px solid black;
  border-radius: 4px;
  width: 500px;
  resize: none;
`;

const BodyLabel = styled.label`
  padding-right: 10px;
`;

const ConstraintChecker = styled.div`
  color: ${(props) => props.color};
  font-size: 8px;
  font-style: italic;

`;
