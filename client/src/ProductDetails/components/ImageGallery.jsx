import React,{useState, useEffect, useMemo} from 'react';
import Wrapper from './Wrapper';
import styled from 'styled-components';
//------------------------------------------------Styled Components

const ThumbNails = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  padding: 10px;
  gap: 10px;
  padding-bottom: 20%;
`;
const ThumbNail = styled.img`
  width: 10%;
  min-height: 10%;
  border: 1px solid;
  background-size: cover;
  &:hover {
    transform: scale(103%)
  }
`;
const LeftArrow = styled.span`
  position: absolute;
  top: 50%;
  left: 14%;
  font-size: 15pt;
  text-align: center;
  padding: 5px;
  background-color: rgba(255,255,255, 0.2);
  cursor: pointer;
  overflow: hidden;
  &:hover{
    background-color: rgba(255,255,255, 0.4);
  }
`;
const RightArrow = styled.span`
  position: absolute;
  top: 50%;
  right: 15px;
  font-size: 15pt;
  text-align: center;
  padding: 5px;
  background-color: rgba(255,255,255, 0.2);
  cursor: pointer;
  &:hover{
    background-color: rgba(255,255,255, 0.4);
  }
`;
const Focused = styled.img`
  max-width: 100%;
  border: 1px solid;

  &:hover {
    transform: scale(103%)
    }
`;
const Container = styled.section`
background-image: url(${props => props.image});
background-repeat: no-repeat;
background-size: cover;
overflow-y: hidden;
position: relative;
`;

//  ------------------------------------------------- Exported Component
  export default function ImageGallery({items}) {
    const len = items.length - 1;
    const [index, setIndex] = useState(0);
    const [pics, setPics] = useState([]);
    const [min, setMin] = useState(0);
    const [max, setMax] = useState(len);

    useEffect(() => {
      setPics(items.filter((item, i) => {
        if(i < max) return false;
        if(i < min) return false;
        if(i > min) return true;
        if(i < max) return true;
      }).map( (item, i) => {
        if (i == index) {
          return (
            <div key={i} style={{borderBottom: "3px solid", maxWidth: "10%"}}>
              <Focused key={i} id={i} src={item.url}/>
            </div>
          )
        } else {
          return <ThumbNail key={i} id={i} src={item.url} />
        }
    }));
    }, [index, items])

//------------------------------------------------- Methods
    const clickHandler = (e) => {
      e.preventDefault();
      setIndex(e.target.id);
    }
    const arrowHandler = (dir) => {
      if (dir === 'left') {
       return (e) => {
         e.preventDefault();
         setIndex(prev => prev-- > 0 ? prev-- : 0)
      }
     } else if (dir === 'right') {
        return (e) => {
          e.preventDefault();
          setIndex(prev => prev++ < items.length -1 ? prev++ : len)
        }
      }
    }

  return (
        <Container image={items[index].url}>
           {index > 5 && <div id={index} style={{marginLeft: "5%", fontSize: "20pt", marginTop: "10px"}} onClick={scrollUp}>⌃</div> }
          <ThumbNails id={index} onClick={clickHandler}>
            { pics }
            {len > 4 && <div id={index} style={{marginLeft: "4%", fontSize: "20pt"}} onClick={scroll}>⌄</div> }
          </ThumbNails>

          { index > 0 && <LeftArrow onClick={arrowHandler('left')}>←</LeftArrow>}
          { index < len && <RightArrow onClick={arrowHandler('right')}>→</RightArrow> }
        </Container>
  )
}

// make a new list for thumbnails, with index > 7
//filter boundaries
//add arrow key functionality
