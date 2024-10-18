import React, { useState } from 'react';

const ToggleButtonGroup = () => {
  const [selected, setSelected] = useState('monthly');

  return (
    <div className="inline-flex items-center rounded-md bg-blue-100 p-1" role="group">
      <button
        type="button"
        className={`px-6 py-2 text-sm font-medium rounded-md transition-all duration-200 ease-in-out ${
          selected === 'monthly'
            ? 'bg-white text-gray-900 shadow-sm'
            : 'text-gray-600 hover:text-gray-900'
        }`}
        onClick={() => setSelected('monthly')}
      >
        Monthly
      </button>
      <button
        type="button"
        className={`px-6 py-2 text-sm font-medium rounded-md transition-all duration-200 ease-in-out ${
          selected === 'annual'
            ? 'bg-white text-gray-900 shadow-sm'
            : 'text-gray-600 hover:text-gray-900'
        }`}
        onClick={() => setSelected('annual')}
      >
        Annual
      </button>
    </div>
  );
};

export default ToggleButtonGroup;