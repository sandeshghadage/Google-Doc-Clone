import { useState } from 'react';

export function FontSize() {
  const [selectedOption, setSelectedOption] = useState('');

  function handleSize(e) {
    document.execCommand("fontSize","", e.target.value)
  }

  const fontSize = [
    {
      fontSize: 1,
      action: "1",
    },
    {
      fontSize: 2,
      action: "2",
    },
    {
      fontSize: 3,
      action: "3",
    },
    {
      fontSize: 4,
      action: "4",
    },
    {
      fontSize:5,
      action: "5",
    },
    {
      fontSize: 6,
      action: "6",
    },
    {
      fontSize: 7,
      action: "7",
    },
    {
      fontSize: 8,
      action: "8",
    },
    {
      fontSize: 9,
      action: "9",
    },
    {
      fontSize: 10,
      action: "10",
    },
    {
      fontSize: 11,
      action: "11",
    },
  ];
  
  return (
    <>
      <select style={{width:"3vw"}} value={selectedOption} onChange={(e) => handleSize(e)}>
        <option>1</option>
        {
          fontSize.map( (element, index)=> (
            <option key={index}>{element.fontSize}</option>
          ))
        }
      </select>
    </>
  );
}
