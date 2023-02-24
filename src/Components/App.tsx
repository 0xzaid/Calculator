// src/components/Calculator.tsx
import React, { useState, useEffect, useCallback } from 'react';
import Button from './Button';
import Display from './Display';
import ResultButton from './ResultButton';
import { handleButtonClick } from './handleButtonClick';

import '../index.css';

function App() {
  const [displayValue, setDisplayValue] = useState('0');

  const handleClick = useCallback((label: string) => {
    handleButtonClick(label, displayValue, setDisplayValue);
  }, [displayValue]);

  const handleKeyDown = useCallback((event: KeyboardEvent) => {
    const key = event.key;

    if (key === 'Enter') {
      handleClick('=');
    } else if (key === 'Backspace') {
      handleClick('DEL');
    } else if (/^[0-9+\-*/.()!^]$/.test(key)) {
      handleClick(key);
    }
  }, [handleClick]);

  useEffect(() => {
    document.addEventListener('keydown', handleKeyDown);
    return () => {
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, [handleKeyDown]);

  const buttonData = [
    { label: "sin", type: "operator", onClick: () => handleClick('sin') },
    { label: "ln", type: "operator", onClick: () => handleClick('ln') },
    { label: "7", type: "number", onClick: () => handleClick('7') },
    { label: "8", type: "number", onClick: () => handleClick('8') },
    { label: "9", type: "number", onClick: () => handleClick('9') },
    { label: "x", type: "operator", onClick: () => handleClick('*') },
    { label: "/", type: "operator", onClick: () => handleClick('/') },
    { label: "cos", type: "operator", onClick: () => handleClick('cos') },
    { label: "Log", type: "operator", onClick: () => handleClick('Log') },
    { label: "4", type: "number", onClick: () => handleClick('4') },
    { label: "5", type: "number", onClick: () => handleClick('5') },
    { label: "6", type: "number", onClick: () => handleClick('6') },
    { label: "-", type: "operator", onClick: () => handleClick('-') },
    { label: "(", type: "operator", onClick: () => handleClick('(') },
    { label: "π", type: "operator", onClick: () => handleClick('π') },
    { label: "^", type: "operator", onClick: () => handleClick('^') },
    { label: "1", type: "number", onClick: () => handleClick('1') },
    { label: "2", type: "number", onClick: () => handleClick('2') },
    { label: "3", type: "number", onClick: () => handleClick('3') },
    { label: "+", type: "operator", onClick: () => handleClick('+') },
    { label: ")", type: "operator", onClick: () => handleClick(')') },
    { label: "!", type: "operator", onClick: () => handleClick('!') },
    { label: "√", type: "operator", onClick: () => handleClick('√') },
    { label: "0", type: "number", onClick: () => handleClick('0') },
    { label: ".", type: "number", onClick: () => handleClick('.') },
    { label: "DEL", type: "operator", onClick: () => handleClick('DEL') },
    { label: "AC", type: "operator", onClick: () => handleClick('AC') }
  ];

  return (
    <div className="rounded-full calculator w-1000 max-w-md mx-auto mt-2">
      <Display value={displayValue} />

      <div className="grid grid-cols-7">
        {buttonData.map((button) => (
          <Button
            key={button.label}
            label={button.label}
            type={button.type}
            onClick={button.onClick}
          />
        ))}
        <ResultButton label="=" onClick={() => handleClick('=')} />
      </div>
    </div>
  );
}

export default App;