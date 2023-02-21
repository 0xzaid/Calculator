// src/components/Calculator.tsx
import React, { useState } from 'react';
import Button from './Button';
import Display from './Display';
import ResultButton from './ResultButton';

function App() {
  const [displayValue, setDisplayValue] = useState('0');

  const handleButtonClick = (label: string) => {
    switch (label) {
      case 'DEL':
        // Delete last character from displayValue
        setDisplayValue(prevValue => {
          if (prevValue.length > 1) {
            return prevValue.slice(0, -1);
          } else {
            return '0';
          }
        });
        break;
      case '=':
        // Evaluate expression in displayValue
        try {
          const result = eval(displayValue).toFixed(4);
          setDisplayValue(result.toString());
        } catch (error) {
          console.error('Invalid expression');
        }
        break;
      case 'π':
        setDisplayValue(prevValue => {
          if (prevValue === '0') {
            return Math.PI.toFixed(4).toString();
          } else {
            return prevValue + Math.PI.toFixed(4).toString();
          }
        });
        break;
      
      case 'sin':
        setDisplayValue(prevValue => {
          const sinValue = Math.sin(Number(prevValue));
          return sinValue.toFixed(4).toString();
        });
        break;

      case 'cos':
        setDisplayValue(prevValue => {
          const cosValue = Math.cos(Number(prevValue));
          return cosValue.toFixed(4).toString();
        });
        break;

      case 'ln':
        setDisplayValue(prevValue => {
          const lnValue = Math.log(Number(prevValue));
          return lnValue.toFixed(4).toString();
        });
        break;

      case 'Log':
        setDisplayValue(prevValue => {
          const LogValue = Math.log10(Number(prevValue));
          return LogValue.toFixed(4).toString();
        });
        break;

      case '^':
        setDisplayValue(prevValue => {

          if (prevValue === '0') {
            return '0';
          } else {
            return prevValue + '**';
          }
        });
        break;

      default:
        // Append clicked button label to displayValue
        setDisplayValue(prevValue => {
          if (prevValue === '0') {
            return label;
          } else {
            return prevValue + label;
          }
        });
    }
  };


  return (
    <div className="w-1000 max-w-md mx-auto mt-2">
      <Display value={displayValue} />

      <div className="grid grid-cols-7">
        <Button
          label="sin"
          type="operator"
          onClick={() => handleButtonClick('sin')}
        />
        <Button
          label="ln"
          type="operator"
          onClick={() => handleButtonClick('ln')}
        />
        <Button
          label="7"
          type="number"
          onClick={() => handleButtonClick('7')}
        />
        <Button
          label="8"
          type="number"
          onClick={() => handleButtonClick('8')}
        />
        <Button
          label="9"
          type="number"
          onClick={() => handleButtonClick('9')}
        />
        <Button
          label="x"
          type="operator"
          onClick={() => handleButtonClick('*')}
        />
        <Button
          label="/"
          type="operator"
          onClick={() => handleButtonClick('/')}
        />
        <Button
          label="cos"
          type="operator"
          onClick={() => handleButtonClick('cos')}
        />
        <Button
          label="Log"
          type="operator"
          onClick={() => handleButtonClick('Log')}
        />
        <Button
          label="4"
          type="number"
          onClick={() => handleButtonClick('4')}
        />
        <Button
          label="5"
          type="number"
          onClick={() => handleButtonClick('5')}
        />
        <Button
          label="6"
          type="number"
          onClick={() => handleButtonClick('6')}
        />
        <Button
          label="-"
          type="operator"
          onClick={() => handleButtonClick('-')}
        />
        <Button
          label="("
          type="operator"
          onClick={() => handleButtonClick('(')}
        />
        <Button
          label="π"
          type="operator"
          onClick={() => handleButtonClick('π')}
        />
        <Button
          label="^"
          type="operator"
          onClick={() => handleButtonClick('^')}
        />
        <Button
          label="1"
          type="number"
          onClick={() => handleButtonClick('1')}
        />
        <Button
          label="2"
          type="number"
          onClick={() => handleButtonClick('2')}
        />
        <Button
          label="3"
          type="number"
          onClick={() => handleButtonClick('3')}
        />
        <Button
          label="+"
          type="operator"
          onClick={() => handleButtonClick('+')}
        />
        <Button
          label=")"
          type="operator"
          onClick={() => handleButtonClick(')')}
        />
        <Button
          label="!"
          type="operator"
          onClick={() => handleButtonClick('!')}
        />
        <Button
          label="√"
          type="operator"
          onClick={() => handleButtonClick('√ ')}
        />
        <Button
          label="0"
          type="number"
          onClick={() => handleButtonClick('2')}
        />
        <Button
          label="."
          type="number"
          onClick={() => handleButtonClick('.')}
        />
        <Button
          label="DEL"
          type="operator"
          onClick={() => handleButtonClick('DEL')}
        />
        <ResultButton label="=" onClick={() => handleButtonClick('=')} />
      </div>
    </div>
  );
}

export default App;