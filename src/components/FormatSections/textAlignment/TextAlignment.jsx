import styles from "./TextAlignment.module.css";
import FormatAlignRightIcon from "@mui/icons-material/FormatAlignRight";
import FormatAlignCenterIcon from "@mui/icons-material/FormatAlignCenter";
import FormatAlignLeftIcon from "@mui/icons-material/FormatAlignLeft";
import Tooltip from "@mui/material/Tooltip";


export default function TextAlignment() {
  function handlePosition(element) {
    document.execCommand(element);
  }

  return (
    <div className={styles.formatContainer}>
      <Tooltip title="Align Left">
      <FormatAlignLeftIcon sx={{ width: "1.2vw" }}
        className={styles.formatIcons}
        onClick={() => handlePosition("justifyLeft")}
      />
      </Tooltip>

      <Tooltip title="Align Center">
      <FormatAlignCenterIcon sx={{ width: "1.2vw" }}
        className={styles.formatIcons}
        onClick={() => handlePosition("justifyCenter")}
      />
      </Tooltip>

      <Tooltip title="Align Right">
      <FormatAlignRightIcon sx={{ width: "1.2vw" }}
        className={styles.formatIcons}
        onClick={() => handlePosition("justifyRight")}
      />
      </Tooltip>
    </div>
  );
}
