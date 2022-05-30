import React, { useState, useMemo, useCallback, useEffect, useRef } from 'react';
import styled, { keyframes } from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { solid } from '@fortawesome/fontawesome-svg-core/import.macro';
import PropTypes from 'prop-types';
import useZoom, { handleMouseOver } from '../../Hooks/useZoom';
// ------------------------------------------------ Styled Components
const myAnim = keyframes`
0% {
  opacity: 0;
  transform: translateX(-250px);
}

100% {
  opacity: 1;
  transform: translateX(0);
}
`;
const ThumbNailsContainer = styled.section`
  display: flex;
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
  left: ${(props) => !props.position ? 14 : 5}%;
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
  max-height: 50%;
  min-height: 4vw;
  border: 1px solid;
  margin-top: 10px;
  &:hover {
    transform: scale(103%);
    cursor: pointer;
  }
`;
const Container = styled.section`
min-width: 60vw;
background-image: url(${(props) => props.image});
background-repeat: no-repeat;
background-size: 100% 100%;
overflow-y: hidden;
user-select: none;
animation: ${myAnim} 1s ease 0s 1 normal forwards;
&:hover {
    cursor: -moz-zoom-in;
    cursor: -webkit-zoom-in;
    cursor: ${(props) => (props.position === 'relative' ? 'zoom-in ' : 'crosshair')};
}
`;
const Arrow = styled.div`
margin-left: ${(props) => props.marginLeft || 0.7}%;
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
  padding: 1px 2px 0px 2px;
  background-color: rgba(255,255,255, 0.2);
  &:hover {
    background-color: rgba(255,255,255, 0.4);
    transform: scale(110%);
    cursor: pointer;
  }
`;
const Container2 = styled.section`
min-width: 60vw;
background-image: url(${(props) => props.image});
background-repeat: no-repeat;
background-size: 100% 100%;
overflow-y: hidden;
position: relative;
display: block;
width: 100vw;
user-select: none;
animation: ${myAnim} 1s ease 0s 1 normal forwards;
&:hover {
    cursor: ${(props) => (props.zoomedIn ? 'zoom-out ' : 'zoom-in')};
}
`
const Icon = styled.span`
margin-left: 5px;
width: 10%;
min-height: 4vw;
margin-top: 10px;
background-size: cover;
z-index: 100;
&:hover {
  transform: scale(103%);
  cursor: pointer;
}
`;
//  ------------------------------------------------- Exported Component
export default function ImageGallery({ items, thumbNailCount }) {
  const len = items.length - 1;
  const [index, setIndex] = useState(0);
  const [min, setMin] = useState(0);
  const [max, setMax] = useState((thumbNailCount));
  const [position, setPosition] = useState('relative');
  const [zoomedIn, setZoomedIn] = useState(false);
  const containerRef = useRef(null);

  // ------------------------------------------------- Methods
  const handleZoom = useCallback(() => {
    const [bindZoom, cancelZoom] = useZoom('container');
    if (zoomedIn) {
      cancelZoom();
      Object.assign(containerRef.current.style, {
        backgroundPosition: 'center',
        backgroundSize: 'cover',
      });
      setZoomedIn(false);
      return;
    }
     setZoomedIn(true);
     bindZoom();
    });
  const positionToggle = useCallback((e) => {
    console.log(e.target.id)
    e.preventDefault();
    e.stopPropagation();
    setPosition((prev) => (prev === 'relative' ? 'absolute' : 'relative'));
  });
  const clickHandler = (e) => {
    e.stopPropagation();
    setIndex(Number(e.target.id));
  };
  const scroll = (dir) => {
    if (dir === 'up') {
      return (e) => {
        e.preventDefault();
        e.stopPropagation();
        setMin((prev) => ((prev - 1) < 0 ? prev : prev - 1));
        setMax((prev) => ((min - 1) < 0 ? prev : prev - 1));
      };
    }
    if (dir === 'down') {
      return (e) => {
        e.preventDefault();
        e.stopPropagation();
        setMin((prev) => (max + 1 > len ? prev : prev + 1));
        setMax((prev) => ((prev + 1) > len ? prev : prev + 1));
      };
    }
    if (dir === 'left') {
      return (e) => {
        e.preventDefault();
        e.stopPropagation();
        setIndex((prev) => (prev - 1 > 0 ? Number(prev - 1) : 0));
      };
    }
    if (dir === 'right') {
      return (e) => {
        e.preventDefault();
        e.stopPropagation();
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
          <Focused onClick={clickHandler} key={item.url} id={i + min} src={item.thumbnail_url} />
        </Underline>
      );
    }
    return <ThumbNail onClick={clickHandler} key={item.url} id={i + min} src={item.thumbnail_url} />;
  }), [index, items, max, min]);
  const icons = useMemo(() => items.filter((item, i) => {
    if (i >= min && i <= max) return true;
    return false;
  }).map((item, i) => {
    if (i + min === Number(index)) {
      return (
        <Icon key={item.url.slice(0, -1)} >
          <FontAwesomeIcon style={{color: 'pink'}} icon={solid('square')} key={item.url} onClick={(e) => setIndex(i + min)} size="2x"/>
        </Icon>
      );
    }
    return(
      <Icon key={item.url.slice(0, -1)}>
        <FontAwesomeIcon style={{color: '#0ABAB5'}} icon={solid('circle')} key={item.url} onClick={(e) => setIndex(i + min)} size="2x"/>
      </Icon>
    )
  }), [index, items, max, min]);
  // ------------------------------------------------- JSX
  return (
    <div>
      { position === 'relative'
        ?
 <Container image={items[index].url} onClick={positionToggle} position={position}>
        <ThumbNailsContainer id={index}>
          <FullScreenBtn onClick={positionToggle}><FontAwesomeIcon onClick={positionToggle} icon={solid('expand')} /></FullScreenBtn>

          {min > 0
          && <Arrow marginLeft='4.2'><FontAwesomeIcon onClick={scroll('up')} icon={solid('angle-up')} /></Arrow>}

          { pics }

          {(len > max && index < len)
          && <Arrow marginLeft='4.2'><FontAwesomeIcon onClick={scroll('down')} icon={solid('angle-down')} /></Arrow> }
        </ThumbNailsContainer>

        { index > min && <LeftArrow onClick={scroll('left')}><FontAwesomeIcon icon={solid('arrow-left')} /></LeftArrow>}
        { (index < max && index < len) && <RightArrow onClick={scroll('right')}><FontAwesomeIcon icon={solid('arrow-right')} /></RightArrow> }
      </Container>
  :
    <Container2 ref={containerRef} id="container" image={items[index].url} zoomedIn={zoomedIn} position={position} onClick={handleZoom}>
       <ThumbNailsContainer>
          <FullScreenBtn onClick={positionToggle}><FontAwesomeIcon onClick={positionToggle} icon={solid('expand')} /></FullScreenBtn>

          {min > 0
          && <Arrow><FontAwesomeIcon onClick={scroll('up')} icon={solid('angle-up')} /></Arrow>}

          { icons }

          {(len > max && index < len)
          && <Arrow><FontAwesomeIcon onClick={scroll('down')} icon={solid('angle-down')} /></Arrow> }
        </ThumbNailsContainer>

        { index > min && <LeftArrow position={position} onClick={scroll('left')}><FontAwesomeIcon icon={solid('arrow-left')} /></LeftArrow>}
        { (index < max && index < len) && <RightArrow onClick={scroll('right')}><FontAwesomeIcon icon={solid('arrow-right')} /></RightArrow> }
    </Container2>
    }
    </div>
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
  thumbNailCount: 4,
};

// add arrow key functionality
// fix image size for thumbnail
// stop state changing when I click a thumbnail
// right arrow is double clicking for some reason
