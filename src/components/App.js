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

    // Remove common characters (case-sensitive)
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
    <div className="p-4 max-w-md mx-auto">
      <input
        data-testid="input1"
        name="name1"
        type="text"
        value={name1}
        onChange={(e) => setName1(e.target.value)}
        placeholder="Enter first name"
        className="border p-2 m-2 w-full"
      />
      <input
        data-testid="input2"
        name="name2"
        type="text"
        value={name2}
        onChange={(e) => setName2(e.target.value)}
        placeholder="Enter second name"
        className="border p-2 m-2 w-full"
      />
      <div className="flex justify-between m-2">
        <button
          data-testid="calculate_relationship"
          name="calculate_relationship"
          onClick={handleCalculate}
          className="bg-blue-500 text-white px-4 py-2 rounded"
        >
          Calculate
        </button>
        <button
          data-testid="clear"
          name="clear"
          onClick={handleClear}
          className="bg-gray-400 text-white px-4 py-2 rounded"
        >
          Clear
        </button>
      </div>
      <h3 data-testid="answer" className="mt-4 text-xl font-semibold">
        {result}
      </h3>
    </div>
  );
};

export default App;
