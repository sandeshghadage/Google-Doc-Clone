
import UndoIcon from "@mui/icons-material/Undo";
import RedoIcon from "@mui/icons-material/Redo";
import PrintOutlinedIcon from "@mui/icons-material/PrintOutlined";
import SpellcheckOutlinedIcon from "@mui/icons-material/SpellcheckOutlined";
import FormatColorFillOutlinedIcon from "@mui/icons-material/FormatColorFillOutlined";
import { SelectZoom } from "./selectZoom/SelectZoom";
import { FontFamily } from "./fontFamily/FontFamily";
import { FontSize } from "./fontSize/FontSize";
import FormatBoldOutlinedIcon from "@mui/icons-material/FormatBoldOutlined";
import FormatItalicOutlinedIcon from "@mui/icons-material/FormatItalicOutlined";
import FormatUnderlinedOutlinedIcon from "@mui/icons-material/FormatUnderlinedOutlined";
import InsertLinkOutlinedIcon from "@mui/icons-material/InsertLinkOutlined";
import AddCommentOutlinedIcon from "@mui/icons-material/AddCommentOutlined";
import { RxDividerVertical } from "react-icons/rx";
import styles from "./FormatIcons.module.css";
import ImagePicker from '../FormatSections/imagePicker/ImagePicker'
import BackgroundColorPicker from "../FormatSections/colorPicker/BackgroundColorPicker";
import FontColorPicker from "../FormatSections/colorPicker/FontColorPicker";
import TextAlignment from "./textAlignment/TextAlignment";
import Tooltip from "@mui/material/Tooltip";


export function FormatIcons(props) {
  const actions = [
    {
      icon: <UndoIcon sx={{ width: "1.2vw" }} />,
      tag: "undo",
      tooltip: "Undo"
    },
    {
      icon: <RedoIcon sx={{ width: "1.2vw" }} />,
      tag: "redo",
      tooltip: "Redo"
    },
    {
      icon: <PrintOutlinedIcon sx={{ width: "1.2vw" }} />,
      tag: "p",
      tooltip: "Print"
    },
    {
      icon: <SpellcheckOutlinedIcon sx={{ width: "1.2vw" }} />,
      tag: "p",
      tooltip: "spell check"
    },
    {
      icon: <FormatColorFillOutlinedIcon sx={{ width: "1.2vw" }} />,
      tag: "p",
      tooltip: "Paint format"
    },
    {
      icon: <RxDividerVertical />,
      tag: "p",
      tooltip: ""
    },
    {
      icon: <FormatBoldOutlinedIcon sx={{ width: "1.4vw" }} />,
      tag: "bold",
      tooltip: "Bold"
    },
    {
      icon: <FormatItalicOutlinedIcon sx={{ width: "1.4vw" }} />,
      tag: "italic",
      tooltip: "Italic"
    },
    {
      icon: <FormatUnderlinedOutlinedIcon sx={{ width: "1.4vw" }} />,
      tag: "underline",
      tooltip: "Underline"
    },
    {
      icon: <RxDividerVertical />,
      tag: "p",
      tooltip: ""
    },
    {
      icon: <InsertLinkOutlinedIcon sx={{ width: "1.2vw" }} />,
      tag: "createLink",
      tooltip: "Insert link"
    },
    {
      icon: <AddCommentOutlinedIcon sx={{ width: "1.2vw" }} />,
      tag: "p",
      tooltip: "Add comment"
    },
    {
      icon: <ImagePicker sx={{ width: "1.2vw" }} />,
      tag: "p",
      tooltip: "Insert Image"
    },
    {
      icon: <RxDividerVertical sx={{ width: "1.2vw" }} />,
      tag: "p",
    },
  ];

  return (
    <div className={styles.formatContainer}>
      {actions.map((action, index) => (
        <Tooltip title={action.tooltip} key={index}>
        <p
          onClick={() => props.onClick(action.tag)}
          className={styles.formatIcons}
          // key={index}
        >
          {action.icon}
        </p>
        </Tooltip>
      ))}
      <div className={styles.select}>
        <TextAlignment />
        <FontColorPicker />
        <BackgroundColorPicker />
        <FontFamily />
        <FontSize />
        <SelectZoom inputRef={props.inputRef}/>
      </div>
    </div>
  );
}


