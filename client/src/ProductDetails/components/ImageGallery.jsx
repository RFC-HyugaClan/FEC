import React, { useState, useMemo, useCallback } from 'react';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { solid } from '@fortawesome/fontawesome-svg-core/import.macro';
import PropTypes from 'prop-types';
// ------------------------------------------------ Styled Components
const ThumbNailsContainer = styled.section`
  display: flex;
  height: 20vw;
  flex-direction: column;
  padding: 10px;
  padding-bottom: 20%;
`;
const ThumbNail = styled.img`
  margin-left: 5px;
  width: 10%;
  min-height: 4vw;
  border: 1px solid;
  margin-top: 10px;
  background-size: cover;
  &:hover {
    transform: scale(103%);
    cursor: pointer;
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
  width: 100%;
  min-height: 4vw;
  border: 1px solid;
  margin-top: 10px;
  &:hover {
    transform: scale(103%)
    }
`;
const Container = styled.section`
background-image: url(${(props) => props.image});
background-repeat: no-repeat;
background-size: cover;
overflow-y: hidden;
position: ${(props) => props.position};
transform: scale(${(props) => props.scale});
&:hover {
    cursor: -moz-zoom-in;
    cursor: -webkit-zoom-in;
    cursor: ${(props) => (props.position === 'relative' ? 'zoom-in ' : 'crosshair')};
}
`;
const Arrow = styled.div`
margin-left: 4.2%;
font-size: 20pt;
width: 15px;
height: 15px;
cursor: pointer;
&:hover{
  transform: scale(102%)
}
`;
const Underline = styled.div`
width: 10%;
margin-left: 5px;
border-bottom: 3px solid;
`;
const FullScreenBtn = styled.span`
  position: absolute;
  top: 4%;
  right: 4%;
  &:hover {
    transform: scale(110%);
    cursor: pointer;
  }
`;
//  ------------------------------------------------- Exported Component
export default function ImageGallery({ items, thumbNailCount }) {
  const len = items.length - 1;
  const [index, setIndex] = useState(0);
  const [min, setMin] = useState(0);
  const [max, setMax] = useState((thumbNailCount || 3));
  const [position, setPosition] = useState('relative');
  // ------------------------------------------------- Methods
  const positionToggle = useCallback((e) => {
    e.preventDefault();
    console.log('dont forget to fix FullScreen/Zoom functionality');
    // setPosition((prev) => (prev === 'relative' ? 'absolute' : 'relative'));
  });
  const clickHandler = useCallback((e) => {
    e.preventDefault();
    setIndex(Number(e.target.id));
  }, []);
  const scroll = (dir) => {
    if (dir === 'up') {
      return (e) => {
        e.preventDefault();
        setMin((prev) => ((prev - 1) < 0 ? prev : prev - 1));
        setMax((prev) => ((min - 1) < 0 ? prev : prev - 1));
      };
    }
    if (dir === 'down') {
      return (e) => {
        e.preventDefault();
        setMin((prev) => (max + 1 > len ? prev : prev + 1));
        setMax((prev) => ((prev + 1) > len ? prev : prev + 1));
      };
    }
    if (dir === 'left') {
      return (e) => {
        e.preventDefault();
        setIndex((prev) => (prev - 1 > 0 ? Number(prev - 1) : 0));
      };
    }
    if (dir === 'right') {
      return (e) => {
        e.preventDefault();
        setIndex((prev) => ((prev + 1) < len ? Number(prev + 1) : len));
      };
    }
    return null;
  };
  const pics = useMemo(() => items.filter((item, i) => {
    if (i >= min && i <= max) return true;
    return false;
  }).map((item, i) => {
    if (i + min === Number(index)) {
      return (
        <Underline key={item.url + 1}>
          <Focused onClick={clickHandler} key={item.url} id={i + min} src={item.url} />
        </Underline>
      );
    }
    return <ThumbNail onClick={clickHandler} key={item.url} id={i + min} src={item.url} />;
  }), [index, items, max, min]);
  // ------------------------------------------------- JSX
  return (
    <Container image={items[index].url} onClick={positionToggle} position={position}>
      <ThumbNailsContainer id={index}>
        <FullScreenBtn onClick={positionToggle}><FontAwesomeIcon onClick={positionToggle} icon={solid('expand')} /></FullScreenBtn>

        {min > 0
        && <Arrow><FontAwesomeIcon onClick={scroll('up')} icon={solid('angle-up')} /></Arrow>}

        { pics }

        {(len > max && index < len)
        && <Arrow><FontAwesomeIcon onClick={scroll('down')} icon={solid('angle-down')} /></Arrow> }
      </ThumbNailsContainer>

      { index > min && <LeftArrow onClick={scroll('left')}><FontAwesomeIcon icon={solid('arrow-left')} /></LeftArrow>}
      { (index < max && index < len) && <RightArrow onClick={scroll('right')}><FontAwesomeIcon icon={solid('arrow-right')} /></RightArrow> }
    </Container>
  );
}

// ---------------------------------------------------- Prop Types
ImageGallery.propTypes = {
  items: PropTypes.arrayOf(PropTypes.objectOf({
    url: PropTypes.string,
    thumbnail_url: PropTypes.string,
    filter: PropTypes.func,
    length: PropTypes.func,
  })).isRequired,
  thumbNailCount: PropTypes.number,
};
ImageGallery.defaultProps = {
  thumbNailCount: 3,
};

// add arrow key functionality
// fix image size for thumbnail
// stop state changing when I click a thumbnail
// right arrow is double clicking for some reason
