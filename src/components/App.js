import React, { useState } from 'react';

const App = () => {
  const [name1, setName1] = useState('');
  const [name2, setName2] = useState('');
  const [result, setResult] = useState('');

  const flames = ['Siblings', 'Friends', 'Love', 'Affection', 'Marriage', 'Enemy'];

  const handleCalculate = () => {
    if (!name1.trim() || !name2.trim()) {
      setResult('Please Enter valid input');
      return;
    }

    let arr1 = name1.split('');
    let arr2 = name2.split('');

    for (let i = 0; i < arr1.length; i++) {
      const index = arr2.indexOf(arr1[i]);
      if (index !== -1) {
        arr1[i] = '';
        arr2[index] = '';
      }
    }

    const remainingLength = [...arr1.join(''), ...arr2.join('')].length;
    const flamesIndex = remainingLength % 6;
    setResult(flames[flamesIndex]);
  };

  const handleClear = () => {
    setName1('');
    setName2('');
    setResult('');
  };

  return (
    <div>
      <input
        data-testid="input1"
        name="name1"
        value={name1}
        onChange={(e) => setName1(e.target.value)}
        placeholder="Enter first name"
      />
      <input
        data-testid="input2"
        name="name2"
        value={name2}
        onChange={(e) => setName2(e.target.value)}
        placeholder="Enter second name"
      />
      <button
        data-testid="calculate_relationship"
        name="calculate_relationship"
        onClick={handleCalculate}
      >
        Calculate Relationship Future
      </button>
      <button
        data-testid="clear"
        name="clear"
        onClick={handleClear}
      >
        Clear
      </button>
      <h3 data-testid="answer">{result}</h3>
    </div>
  );
};

export default App;
