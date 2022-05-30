import React from 'react';
import Styled from 'styled-components';

const Style = Styled.img`
  border-radius: 50%;
  object-fit: cover;
  width: 3em;
  height: 3em;
  &:hover{
    outline: 2px solid;
  }
`;
const Grid = Styled.div`
  height: 150px;
  margin-left: 25px;
  display: grid;
  justify-content: center;
  align-items: center;
  grid-template-columns: repeat(4, 1fr);
  row-gap: 8px;
  user-select: none;
`;

export default function StyleSelector({ styles, currentStyle, setCurrentStyle }) {
  return (
    <>
      <h2>
        Styles &nbsp;&gt;
        &nbsp;
        {currentStyle.name}
      </h2>
      <Grid>
        {styles.map((style) => (
          <Style
            key={style.photos[0].thumbnail_url}
            onClick={() => setCurrentStyle(style)}
            src={style.photos[0].thumbnail_url}
          />
        ))}
      </Grid>
    </>
  );
}
// add tick mark to show selected style.