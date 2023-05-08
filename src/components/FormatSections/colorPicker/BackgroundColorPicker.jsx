import { useState } from "react";
import EditIcon from "@mui/icons-material/Edit";
import styles from "./ColorPicker.module.css";
import Tooltip from "@mui/material/Tooltip";

export default function BackgroundColorPicker() {
  const [show2, setShow2] = useState(false);

  function handlebackgroundhighlight(e) {
    document.execCommand("backColor", "", e.target.value);
  }

  return (
    <span className={styles.colorbox}>
      <Tooltip title="Highlight Color">
      <EditIcon sx={{ width: "1.2vw" }}
        className={styles.formatIcons}
        onClick={() => setShow2(!show2)}
      />
      </Tooltip>
      {show2 ? (
        <>
          <input
            className={styles.inputbox}
            type="color"
            onChange={(e) => handlebackgroundhighlight(e)}
          />
        </>
      ) : null}
    </span>
  );
}
