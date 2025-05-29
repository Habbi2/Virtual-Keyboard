import React from 'react';
import './ColorPicker.css';

const ColorPicker = ({ onColorChange }) => {
  const colors = [
    '#4CAF50', // Green (default)
    '#2196F3', // Blue
    '#F44336', // Red
    '#9C27B0', // Purple
    '#FF9800', // Orange
    '#00BCD4', // Cyan
    '#795548', // Brown
    '#607D8B'  // Blue Grey
  ];

  return (
    <div className="color-picker-container">
      <h3>Choose Background Color</h3>
      <div className="color-options">
        {colors.map((color, index) => (
          <div
            key={`color-${index}`}
            className="color-option"
            style={{ backgroundColor: color }}
            onClick={() => onColorChange(color)}
          />
        ))}
      </div>
    </div>
  );
};

export default ColorPicker;
