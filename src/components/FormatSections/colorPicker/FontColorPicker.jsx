import { useState } from "react";
import styles from "./ColorPicker.module.css";
import FormatColorTextIcon from "@mui/icons-material/FormatColorText";
import Tooltip from "@mui/material/Tooltip";

export default function FontColorPicker() {
  const [show, setShow] = useState(false);

  function handleColor(e) {
    document.execCommand("foreColor", "", e.target.value);
  }

  return (
    <span className={styles.colorbox}>
      <Tooltip title="Font color">
      <FormatColorTextIcon sx={{width:"1.2vw"}}
        className={styles.formatIcons}
        onClick={() => setShow(!show)}
      />
      </Tooltip>
      {show ? (
        <>
          <input
            className={styles.inputbox}
            type="color"
            onChange={(e) => handleColor(e)}
          />
        </>
      ) : null}
    </span>
  );
}
