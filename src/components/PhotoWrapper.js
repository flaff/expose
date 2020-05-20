import React from 'react'

const imgWithClick = { cursor: 'pointer' };

const PhotoWrapper = ({ index, onClick, photo, margin, direction, top, left, containerHeight, ...otherProps }) => {
  const imgStyle = { margin: margin, display: 'block', borderRadius: '10px', overflow: 'hidden' };

  if (direction === 'column') {
    imgStyle.position = 'absolute';
    imgStyle.left = left;
    imgStyle.top = top;
  }

  const handleClick = event => {
    onClick(event, { photo, index });
  };

  return (
    <div style={{ ...imgStyle, ...(handleClick && imgWithClick), width: photo.width, height: photo.height }} {...otherProps} />
  );
};

export default PhotoWrapper;
