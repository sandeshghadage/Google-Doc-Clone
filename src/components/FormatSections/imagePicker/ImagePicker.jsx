import { useRef } from "react";
import { textEditorRefAtom } from "../../../atom/atom";
import InsertPhotoIcon from "@mui/icons-material/InsertPhoto";

export default function ImagePicker() {
  const inputRef = useRef(textEditorRefAtom);

  function handleImageOpen() {
    inputRef.current.click();
  }

  function handleFileSelect(event) {
    const file = event.target.files[0];
    const reader = new FileReader();

    reader.onload = function (event) {
      const img = document.createElement("img");
      img.src = event.target.result;
      img.width = 500;
      img.height = 500;
      const editor = inputRef.current;
      editor.focus();
      const selection = document.getSelection();
      if (selection.rangeCount === 0) return;
      const range = selection.getRangeAt(0);
      range.insertNode(img);
    };
    reader.readAsDataURL(file);
  }

  return (
    <div>
      <InsertPhotoIcon sx={{width:"1.2vw"}}
        // className={styles.formatIcons}
        onClick={handleImageOpen}
      />
      <input onChange={handleFileSelect} hidden ref={inputRef} type="file" />
    </div>
  );
}
