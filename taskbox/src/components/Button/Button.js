import React from 'react';
import './Button.css';
import '../../App.css';

// eslint-disable-next-line react/prop-types
export default function Button({ children, onClick, onMouseEnter, onMouseLeave, size, variant, color }) {
  return (
    <div
      className={`button ${size} ${variant} ${color}`}
      onClick={onClick}
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
    >
      {children}
    </div>
  );
}
