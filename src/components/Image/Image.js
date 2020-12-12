import React from 'react';

const DEFAULT_FALLBACK_IMG = 'https://via.placeholder.com/200x200.jpg';

const defaultStyle = {
  height: 'auto',
  width: '100%',
};

const Image = ({
  src, alt, fallbackImg = DEFAULT_FALLBACK_IMG, style = defaultStyle,
}) => (
  <img
    src={src}
    alt={alt}
    style={style}
    onError={(e) => {
      e.target.onerror = null;
      e.target.src = fallbackImg;
    }}
  />
);

export default Image;
