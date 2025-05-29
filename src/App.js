import React, { useState, useRef } from 'react';
import './App.css';
import Keyboard from './components/Keyboard';
import ColorPicker from './components/ColorPicker';

function App() {
  const [inputText, setInputText] = useState('');
  const [backgroundColor, setBackgroundColor] = useState('#4CAF50'); // Default green
  const textAreaRef = useRef(null);

  const handleKeyPress = (key) => {
    if (key === 'backspace') {
      setInputText(prevText => prevText.slice(0, -1));
    } else if (key === 'space') {
      setInputText(prevText => prevText + ' ');
    } else if (key === 'return') {
      setInputText(prevText => prevText + '\n');
    } else if (key === 'shift' || key === '123') {
      // Handle these special keys if needed
    } else {
      setInputText(prevText => prevText + key);
    }
    
    // Focus the textarea after each key press
    if (textAreaRef.current) {
      textAreaRef.current.focus();
    }
  };

  const handleColorChange = (color) => {
    setBackgroundColor(color);
  };
  
  return (
    <div className="App" style={{ backgroundColor }}>
      <div className="app-container">
        <Keyboard onKeyPress={handleKeyPress} />
      </div>
    </div>
  );
}

export default App;
