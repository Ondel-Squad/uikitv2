import { Colors } from "./types";

export const baseColors = {
  failure: "#d30000",
  primary: "#f04d92",
  primaryBright: "#f04d92",
  primaryDark: "#f04d92",
  secondary: "#f04d92",
  success: "#31D0AA",
  warning: "#FFB237",
};

export const brandColors = {
  binance: "#F0B90B",
};

export const lightColors: Colors = {
  ...baseColors,
  ...brandColors,
  background: "#FAF9FA",
  backgroundDisabled: "#E9EAEB",
  contrast: "#191326",
  invertedContrast: "#FFFFFF",
  input: "#eeeaf4",
  tertiary: "#ffcbde",
  text: "#f04d92",
  textDisabled: "#BDC2C4",
  textSubtle: "#f04d92",
  borderColor: "#E9EAEB",
  card: "#ffcbde",
  gradients: {
    bubblegum: "linear-gradient(139.73deg, #a83569 0%, #91305c 100%)",
  },
};

export const darkColors: Colors = {
  ...baseColors,
  ...brandColors,
  secondary: "#9A6AFF",
  background: "#343135",
  backgroundDisabled: "#3c3742",
  contrast: "#FFFFFF",
  invertedContrast: "#191326",
  input: "#483f5a",
  primaryDark: "#0098A1",
  tertiary: "#353547",
  text: "#f04d92",
  textDisabled: "#666171",
  textSubtle: "#f04d92",
  borderColor: "#524B63",
  card: "#27262c",
  gradients: {
    bubblegum: "linear-gradient(139.73deg, #313D5C 0%, #3D2A54 100%)",
  },
};
