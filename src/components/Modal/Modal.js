import React, { useEffect, useCallback } from 'react';
import './Modal.css';

const Modal = ({ children, onClose, open }) => {
  const handleEsc = useCallback((event) => {
    if (event.keyCode === 27) {
      onClose();
    }
  }, []);

  useEffect(() => {
    document.addEventListener('keydown', handleEsc, false);

    return () => {
      document.removeEventListener('keydown', handleEsc, false);
    };
  }, []);

  return (
    <div
      className="modal"
      data-testid="modal"
      style={{ display: open ? 'block' : 'none' }}
    >
      <section className="modal-main">
        <button data-testid="btn-close-modal" type="button" onClick={onClose}>X</button>
        {children}
      </section>
    </div>
  );
};

export default Modal;
