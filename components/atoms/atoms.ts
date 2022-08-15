import { atom } from "recoil";

export const commentState = atom({
  key: "commentState",
  default: true,
});

export const nodeState = atom({
  key: "nodeState",
  default: false,
});