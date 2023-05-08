import { useState } from 'react';

export function FontSize() {
  const [selectedOption, setSelectedOption] = useState('');

  function handleSize(e) {
    document.execCommand("fontSize","", e.target.value)
  }

  const fontSize = [
    {
      fontSize: 8,
      action: "1",
    },
    {
      fontSize: 9,
      action: "2",
    },
    {
      fontSize: 10,
      action: "3",
    },
    {
      fontSize: 11,
      action: "4",
    },
    {
      fontSize:12,
      action: "5",
    },
    {
      fontSize: 14,
      action: "6",
    },
    {
      fontSize: 18,
      action: "7",
    },
    {
      fontSize: 24,
      action: "8",
    },
    {
      fontSize: 26,
      action: "9",
    },
    {
      fontSize: 30,
      action: "10",
    },
    {
      fontSize: 36,
      action: "11",
    },
  ];
  
  return (
    <>
      <select style={{width:"3vw"}} value={selectedOption} onChange={(e) => handleSize(e)}>
        <option>8</option>
        {
          fontSize.map( (element, index)=> (
            <option key={index}>{element.action}</option>
          ))
        }
      </select>
    </>
  );
}
