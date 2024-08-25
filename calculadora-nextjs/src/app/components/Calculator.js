// app/components/Calculator.js
'use client';

import { useState } from 'react';
import { evaluate } from 'mathjs';
import Display from './Display';
import ButtonPanel from './ButtonPanel';

export default function Calculator() {
  const [input, setInput] = useState('');
  const [result, setResult] = useState('');

  const handleButtonClick = (value) => {
    setInput(input + value);
  };

  const handleClear = () => {
    setInput('');
    setResult('');
  };

  const handleCalculate = () => {
    try {
      setResult(evaluate(input));
    } catch (error) {
      setResult('Error');
    }
  };

  return (
    <div className="container mt-5">
      <div className="row justify-content-center">
        <div className="col-md-4">
          <div className="card shadow-sm">
            <div className="card-body">
              <h1 className="text-center mb-4">Sony</h1>
              <Display input={input} result={result} />
              <ButtonPanel
                onButtonClick={handleButtonClick}
                onClear={handleClear}
                onCalculate={handleCalculate}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
