import React from 'react';
import styled from 'styled-components';

function UsernameEmail(data) {
  const {
    username, setUsername, email, setEmail,
  } = data;
  return (
    <Wrapper>
      <UsernameLabel>Username: </UsernameLabel>
      <UsernameInput
        type="text"
        value={username}
        placeholder="Example: jackson11!"
        onChange={(e) => setUsername(e.target.value)}
      />
      <EmailLabel>Email: </EmailLabel>
      <EmailInput
        type="email"
        value={email}
        placeholder="Example: jackson11@email.com"
        onChange={(e) => setEmail(e.target.value)}
      />
    </Wrapper>
  );
}

export default UsernameEmail;

const Wrapper = styled.section`

`;

const UsernameLabel = styled.label`
  margin-left: 10px;

`;

const EmailLabel = styled.label`
  margin-left: 45px;
`;

const UsernameInput = styled.input`
  display: inline-block;
  border: 1px solid black;
  border-radius: 4px;
  width: 200px;
  margin-left: 20px;
`;

const EmailInput = styled.input`
  display: inline-block;
  border: 1px solid black;
  border-radius: 4px;
  width: 200px;
`;
