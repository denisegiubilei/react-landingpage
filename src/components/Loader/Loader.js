import React from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSpinner } from '@fortawesome/free-solid-svg-icons';

import './Loader.css';

const Loader = ({ size = '4x' }) => (
  <div className="loader-container">
    <FontAwesomeIcon spin icon={faSpinner} size={size} />
  </div>
);

export default Loader;
