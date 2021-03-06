import React from 'react';
import styled from 'styled-components';

function Characteristics(data) {
  const { chars, charID, setCharRating } = data;
  return (
    <OuterWrapper>
      {chars.Size
        && (
        <Wrapper>
          <DescWrapper>

            Size:
          </DescWrapper>
          {[...Array(5)].map((radio, index) => {
            const sizeDescr = ['A size too small', '1/2 size too small', 'Perfect', '1/2 size too big', 'A size too big'];
            return (
              <CharInput key={sizeDescr[index]}>
                <RadioLabel>
                  {sizeDescr[index]}
                  <br />
                  <CharSelector
                    type="radio"
                    name="size"
                    value={index + 1}
                    onClick={(e) => setCharRating((charRating) => ({
                      ...charRating,
                      [charID.Size]: Number(e.target.value),
                    }))}
                  />
                </RadioLabel>
              </CharInput>
            );
          })}
        </Wrapper>
        )}
      {chars.Width
        && (
        <Wrapper>
          <DescWrapper>

            Width:
          </DescWrapper>
          {[...Array(5)].map((radio, index) => {
            const widthDescr = ['Too Narrow', 'Slightly Narrow', 'Perfect', 'Slightly Wide', 'Too Wide'];
            return (
              <CharInput key={widthDescr[index]}>
                <RadioLabel>
                  {widthDescr[index]}
                  <br />
                  <CharSelector
                    type="radio"
                    name="width"
                    value={index + 1}
                    onClick={(e) => setCharRating((charRating) => ({
                      ...charRating,
                      [charID.Width]: Number(e.target.value),
                    }))}
                  />
                </RadioLabel>
              </CharInput>
            );
          })}
        </Wrapper>
        )}
      {chars.Comfort
        && (
        <Wrapper>
          <DescWrapper>

            Comfort:
          </DescWrapper>
          {[...Array(5)].map((radio, index) => {
            const comfortDescr = ['Uncomfortable', 'Slightly uncomfortable', 'Ok', 'Comfortable', 'Perfect'];
            return (
              <CharInput key={comfortDescr[index]}>
                <RadioLabel>
                  {comfortDescr[index]}
                  <br />
                  <CharSelector
                    type="radio"
                    name="comfort"
                    value={index + 1}
                    onClick={(e) => setCharRating((charRating) => ({
                      ...charRating,
                      [charID.Comfort]: Number(e.target.value),
                    }))}
                  />
                </RadioLabel>
              </CharInput>
            );
          })}
        </Wrapper>
        )}
      {chars.Quality
        && (
        <Wrapper>
          <DescWrapper>

            Quality:
          </DescWrapper>
          {[...Array(5)].map((radio, index) => {
            const qualityDescr = ['Poor', 'Below Average', 'What I expected', 'Pretty Great', 'Perfect'];
            return (
              <CharInput key={qualityDescr[index]}>
                <RadioLabel>
                  {qualityDescr[index]}
                  <br />
                  <CharSelector
                    type="radio"
                    name="quality"
                    value={index + 1}
                    onClick={(e) => setCharRating((charRating) => ({
                      ...charRating,
                      [charID.Quality]: Number(e.target.value),
                    }))}
                  />
                </RadioLabel>
              </CharInput>
            );
          })}
        </Wrapper>
        )}
      {chars.Length
        && (
        <Wrapper>
          <DescWrapper>

            Length:
          </DescWrapper>
          {[...Array(5)].map((radio, index) => {
            const lengthDescr = ['Runs Short', 'Runs Slightly Short', 'Perfect', 'Runs Slightly Long', 'Runs Long'];
            return (
              <CharInput key={lengthDescr[index]}>
                <RadioLabel>
                  {lengthDescr[index]}
                  <br />
                  <CharSelector
                    type="radio"
                    name="length"
                    value={index + 1}
                    onClick={(e) => setCharRating((charRating) => ({
                      ...charRating,
                      [charID.Length]: Number(e.target.value),
                    }))}
                  />
                </RadioLabel>
              </CharInput>
            );
          })}
        </Wrapper>
        )}
      {chars.Fit
        && (
        <Wrapper>
          <DescWrapper>
            Fit
          </DescWrapper>
          {[...Array(5)].map((radio, index) => {
            const fitDescr = ['Runs Tight', 'Runs Slightly Tight', 'Perfect', 'Runs Slightly Loose', 'Runs Loose'];
            return (
              <CharInput key={fitDescr[index]}>
                <RadioLabel>
                  {fitDescr[index]}
                  <br />
                  <CharSelector
                    type="radio"
                    name="fit"
                    value={index + 1}
                    onClick={(e) => setCharRating((charRating) => ({
                      ...charRating,
                      [charID.Fit]: Number(e.target.value),
                    }))}
                  />
                </RadioLabel>
              </CharInput>
            );
          })}
        </Wrapper>
        )}
    </OuterWrapper>
  );
}

export default Characteristics;

const OuterWrapper = styled.div`

`;

const Wrapper = styled.div`
  display: flex;
  vertical-align: middle;
  margin-left: 10px;
`;

const RadioLabel = styled.label`
  display: inline-block;
  float: left;
  padding: 0 1em;
  text-align: center;
`;

const CharSelector = styled.input`

`;

const CharInput = styled.label`

`;

const DescWrapper = styled.div`
  display: inline-block;
  font-size: 20px;
`;
