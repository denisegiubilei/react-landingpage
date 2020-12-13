import React from 'react';
import './Image.css';

const DEFAULT_FALLBACK_IMG = 'https://via.placeholder.com/200x200.jpg';

const Image = ({
  src,
  alt,
  fallbackImg = DEFAULT_FALLBACK_IMG,
}) => (
  <div className="img-container">
    <img
      src={src}
      alt={alt}
      onError={(e) => {
        e.target.onerror = null;
        e.target.src = fallbackImg;
      }}
    />
  </div>
);

export default Image;
