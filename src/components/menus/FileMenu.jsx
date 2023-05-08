import * as React from "react";
import Button from "@mui/material/Button";
import ClickAwayListener from "@mui/material/ClickAwayListener";
import Grow from "@mui/material/Grow";
import Paper from "@mui/material/Paper";
import Popper from "@mui/material/Popper";
import MenuItem from "@mui/material/MenuItem";
import MenuList from "@mui/material/MenuList";
import Stack from "@mui/material/Stack";
import ArticleIcon from "@mui/icons-material/Article";
import FolderOpenOutlinedIcon from "@mui/icons-material/FolderOpenOutlined";
import FileCopyOutlinedIcon from "@mui/icons-material/FileCopyOutlined";
import PersonAddAltIcon from "@mui/icons-material/PersonAddAlt";
import FileDownloadOutlinedIcon from "@mui/icons-material/FileDownloadOutlined";
import LocalPrintshopOutlinedIcon from "@mui/icons-material/LocalPrintshopOutlined";
import { iconStyle } from "../../constants/Colors";
import EmailOutlinedIcon from "@mui/icons-material/EmailOutlined";
import DriveFileRenameOutlineOutlinedIcon from "@mui/icons-material/DriveFileRenameOutlineOutlined";
import DriveFileMoveOutlinedIcon from "@mui/icons-material/DriveFileMoveOutlined";
import AddToDriveOutlinedIcon from "@mui/icons-material/AddToDriveOutlined";
import DeleteOutlineOutlinedIcon from "@mui/icons-material/DeleteOutlineOutlined";
import jsPDF from "jspdf";
import html2canvas from "html2canvas";
import { useRecoilValue } from "recoil";
import { docNameAtom } from "../../atom/atom";

const menuCompStyle = {
  marginBottom: "-4px",
  marginTop: "8px",
  padding: "2px 7px",
  overflow: "hidden",
  verticalAlign: "taxt-bottom",
  textTransform: "none",
  color: "#535457",
};

export default function MenuListComposition() {
  const [open, setOpen] = React.useState(false);
  const anchorRef = React.useRef(null);

  const title = useRecoilValue(docNameAtom);

  const handleToggle = () => {
    setOpen((prevOpen) => !prevOpen);
  };

  const handleClose = (event) => {
    if (anchorRef.current && anchorRef.current.contains(event.target)) {
      return;
    }

    setOpen(false);
  };

  function handleListKeyDown(event) {
    if (event.key === "Tab") {
      event.preventDefault();
      setOpen(false);
    } else if (event.key === "Escape") {
      setOpen(false);
    }
  }

  // return focus to the button when we transitioned from !open -> open
  const prevOpen = React.useRef(open);
  React.useEffect(() => {
    if (prevOpen.current === true && open === false) {
      anchorRef.current.focus();
    }

    prevOpen.current = open;
  }, [open]);


  async function handleDownload() {
    const sheetContent = document.getElementById(`editor`);
    const canvas = await html2canvas(sheetContent, { dpi: 300 });
    const imageData = canvas.toDataURL("image/png", 1.0);
    const pdfDoc = new jsPDF({
      orientation: "portrait",
      unit: "mm",
      format: "a4",
      compress: false,
    });
    pdfDoc.addImage(imageData, "PNG", 0, 0, 210, 297, "", "FAST");
    pdfDoc.save(`${title}.pdf`);
  }

  return (
    <Stack direction="row" spacing={2}>
      <div>
        <Button
          style={menuCompStyle}
          ref={anchorRef}
          id="composition-button"
          aria-controls={open ? "composition-menu" : undefined}
          aria-expanded={open ? "true" : undefined}
          aria-haspopup="true"
          onClick={handleToggle}
        >
          File
        </Button>
        <Popper
          open={open}
          anchorEl={anchorRef.current}
          role={undefined}
          placement="bottom-start"
          transition
          disablePortal
        >
          {({ TransitionProps, placement }) => (
            <Grow
              {...TransitionProps}
              style={{
                transformOrigin:
                  placement === "bottom-start" ? "left top" : "left bottom",
              }}
            >
              <Paper square elevation={3}>
                <ClickAwayListener onClickAway={handleClose}>
                  <MenuList
                    sx={{ width: "20rem" }}
                    autoFocusItem={open}
                    id="composition-menu"
                    aria-labelledby="composition-button"
                    onKeyDown={handleListKeyDown}
                  >
                    <MenuItem onClick={handleClose}>
                      <ArticleIcon
                        sx={{ marginRight: "10px" }}
                        style={iconStyle}
                      />
                      New
                    </MenuItem>
                    <MenuItem onClick={handleClose}>
                      <FolderOpenOutlinedIcon
                        sx={{ marginRight: "10px" }}
                        style={iconStyle}
                      />
                      Open
                    </MenuItem>
                    <MenuItem onClick={handleClose}>
                      <FileCopyOutlinedIcon
                        sx={{ marginRight: "10px" }}
                        style={iconStyle}
                      />
                      Make a copy
                    </MenuItem>
                    <MenuItem onClick={handleClose}>
                      <PersonAddAltIcon
                        sx={{ marginRight: "10px" }}
                        style={iconStyle}
                      />
                      Share
                    </MenuItem>

                    <MenuItem onClick={handleClose}>
                      <EmailOutlinedIcon
                        sx={{ marginRight: "10px" }}
                        style={iconStyle}
                      />
                      Email
                    </MenuItem>

                    <MenuItem onClick={handleDownload}>
                      <FileDownloadOutlinedIcon
                        sx={{ marginRight: "10px" }}
                        style={iconStyle}
                      />
                      Download
                    </MenuItem>

                    <MenuItem onClick={handleClose}>
                      <DriveFileRenameOutlineOutlinedIcon
                        sx={{ marginRight: "10px" }}
                        style={iconStyle}
                      />
                      Rename
                    </MenuItem>

                    <MenuItem onClick={handleClose}>
                      <DriveFileMoveOutlinedIcon
                        sx={{ marginRight: "10px" }}
                        style={iconStyle}
                      />
                      Move
                    </MenuItem>

                    <MenuItem onClick={handleClose}>
                      <AddToDriveOutlinedIcon
                        sx={{ marginRight: "10px" }}
                        style={iconStyle}
                      />
                      Add shortcut to Drive
                    </MenuItem>

                    <MenuItem onClick={handleClose}>
                      <DeleteOutlineOutlinedIcon
                        sx={{ marginRight: "10px" }}
                        style={iconStyle}
                      />
                      Move to trash
                    </MenuItem>

                    <MenuItem onClick={handleClose}>
                      <LocalPrintshopOutlinedIcon
                        sx={{ marginRight: "10px" }}
                        style={iconStyle}
                      />
                      Print
                    </MenuItem>
                  </MenuList>
                </ClickAwayListener>
              </Paper>
            </Grow>
          )}
        </Popper>
      </div>
    </Stack>
  );
}
