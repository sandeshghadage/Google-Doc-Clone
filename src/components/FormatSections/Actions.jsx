import { useRef } from "react";
import { FormatIcons } from "./FormatIcons";
import Box from "@mui/material/Box";
import styles from "./Actions.module.css";

export function Actions() {

  const divRef = useRef();

  const handlePerformAction = (action) => {
      document.execCommand(action);
  };

  
  return (
    <div>
      <FormatIcons onClick={handlePerformAction} inputRef={divRef}/>

      <section className={styles.texteditor___container}>
        <Box
          ref={divRef}
          id="editor"
          className={styles.container}
          contentEditable
        ></Box>
      </section>
    </div>
  );
}
