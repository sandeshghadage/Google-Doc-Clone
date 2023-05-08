import { useState } from 'react';

export function FontFamily() {
  const [selectedOption, setSelectedOption] = useState('');

  function handleFamily(e) {
    document.execCommand("fontName", " ", e.target.value)
  }

  const fontFamilyList = [
    "serif",
    "arial",
    "sans-serif",
    "monospace",
    "cursive",
    "fantasy",
    "system-ui",
    "ui-serif",
    "ui-sans-serif",
    "ui-monospace",
    "ui-rounded",
    "emoji",
    "math",
    "fangsong",
    "Georgia",
    "Times New Roman",
    "Impact",
  ];
  
  return (
    <>
      <select style={{width:"6vw"}} value={selectedOption} onChange={(e) => handleFamily(e)}>
        <option>serif</option>
        {
          fontFamilyList.map( (font, index) => (
            <option key={index}>{font}</option>
          ))
        }
      </select>
    </>
  );
}
