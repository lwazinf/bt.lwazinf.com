import { atom } from "recoil";

export const walletState = atom({
  key: "walletState",
  default: false,
});

export const addressState = atom({
  key: "addressState",
  default: "",
});