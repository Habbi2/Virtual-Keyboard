import React from 'react';
import './Keyboard.css';

const Keyboard = ({ onKeyPress }) => {
  // Define keyboard layout
  const keyboardLayout = [
    ['1', '2', '3', '4', '5', '6', '7', '8', '9', '0'],
    ['q', 'w', 'e', 'r', 't', 'y', 'u', 'i', 'o', 'p'],
    ['a', 's', 'd', 'f', 'g', 'h', 'j', 'k', 'l'],
    ['shift', 'z', 'x', 'c', 'v', 'b', 'n', 'm', 'backspace'],
    ['!#1', ',', 'space', '.', 'return']
  ];

  // Handle key press
  const handleKeyClick = (key) => {
    if (onKeyPress) {
      onKeyPress(key);
    }
  };

  // Render keyboard keys
  const renderKeys = () => {
    return keyboardLayout.map((row, rowIndex) => (
      <div className="keyboard-row" key={`row-${rowIndex}`}>
        {row.map((key) => {
          let keyClass = 'keyboard-key';
          
          if (key === 'space') keyClass += ' key-space';
          if (key === 'backspace') keyClass += ' key-backspace';
          if (key === 'shift') keyClass += ' key-shift';
          if (key === '123') keyClass += ' key-123';
          if (key === 'return') keyClass += ' key-return';
          
          let keyDisplay = key;
          if (key === 'space') keyDisplay = '';
          if (key === 'backspace') keyDisplay = '⌫';
          if (key === 'shift') keyDisplay = '⇧';
          if (key === 'return') keyDisplay = '⏎';
          
          return (
            <button 
              className={keyClass} 
              key={`key-${key}`}
              onClick={() => handleKeyClick(key)}
            >
              {keyDisplay}
            </button>
          );
        })}
      </div>
    ));
  };

  return (
    <div className="keyboard-container">
      {renderKeys()}
      <div className="keyboard-footer">
      </div>
    </div>
  );
};

export default Keyboard;
