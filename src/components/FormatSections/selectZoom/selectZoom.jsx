import styles from "./selectZoom.module.css";
import { useState } from "react";

// eslint-disable-next-line react/prop-types
export function SelectZoom({inputRef}) {
  
  const [scaleSize, setScaleSize] = useState("100%");
  const scale = ["100%", "50%", "75%", "100%", "125%", "150%", "200%"];

  function handleScale(e) {
    console.log(inputRef);
    console.log(e.target.value)
    setScaleSize(e.target.value);
      if (e.target.value === "100%") {
        inputRef.current.style.transform = "scale(1,1)";
      } else if (e.target.value === "150%") {
        inputRef.current.style.transform = "scale(1.5,1)";
      } else if (e.target.value === "200%") {
        inputRef.current.style.transform = "scale(2,1)";
      } else if (e.target.value === "50%") {
        inputRef.current.style.transform = "scale(0.65,0.65)";
      } else if (e.target.value === "25%") {
        inputRef.current.style.transform = "scale(0.5,0.5)";
      } else if (e.target.value === "75%") {
        inputRef.current.style.transform = "scale(0.8,1)";
      }
  }

  return (
    <select className={styles.box} value={scaleSize} onChange={handleScale}>
      {scale.map((ele, index) => (
        <option key={index} value={ele}>
          {ele}
        </option>
      ))}
    </select>
  );
}
