import { atom } from "recoil";

export const textEditorRefAtom = atom({
  key: "textEditorRefAtom",
  default: null,
});

export const docNameAtom = atom({
  key: "docNameAtom",
  default: "Untitled Document",
});