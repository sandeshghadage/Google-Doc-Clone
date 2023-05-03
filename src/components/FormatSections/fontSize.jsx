import { useState } from 'react';

export function FontSize() {
  const [selectedOption, setSelectedOption] = useState('');
  
  return (
    <>
      <select style={{width:"7.6vw"}} value={selectedOption} onChange={(e) => setSelectedOption(e.target.value)}>
        <option value="">Normal text</option>
        <option value="option1">Option 1</option>
        <option value="option2">Option 2</option>
        <option value="option3">Option 3</option>
      </select>
    </>
  );
}
