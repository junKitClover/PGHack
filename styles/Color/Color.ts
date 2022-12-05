import styles from "./Color.module.scss";

export type TInformationColor =
  | "informationLighter"
  | "informationLight"
  | "information"
  | "informationDark"
  | "informationDarker";

export type TWarningColor =
  | "warningLighter"
  | "warningLight"
  | "warning"
  | "warningDark"
  | "warningDarker";

export type TErrorColor =
  | "errorLighter"
  | "errorLight"
  | "error"
  | "errorDark"
  | "errorDarker";

export type TSuccessColor =
  | "successLighter"
  | "successLight"
  | "success"
  | "successDark"
  | "successDarker";

export type TGreyColor =
  | "greyLighter"
  | "greyLight"
  | "grey"
  | "greyDark"
  | "greyDarker";

export type TTextColor =
  | "informationLighter"
  | "information"
  | "informationDarker"
  | "warningLighter"
  | "warning"
  | "warningDarker"
  | "errorLighter"
  | "error"
  | "errorDarker"
  | "successLighter"
  | "success"
  | "successDarker"
  | "greyLighter"
  | "greyLight"
  | "grey"
  | "greyDark"
  | "greyDarker"
  | "white"
  | "black"
  | "fontColor"
  | "secondaryFontColor"
  | "transparent"
  | "primaryLighter"
  | "primaryLight"
  | "primary"
  | "primaryDark"
  | "primaryDarker";

export type TPrimaryColor =
  | "primaryLighter"
  | "primaryLight"
  | "primary"
  | "primaryDark"
  | "primaryDarker";

export type TSecondaryColor =
  | "secondaryLighter"
  | "secondaryLight"
  | "secondary"
  | "secondaryDark"
  | "secondaryDarker";

export type TColor =
  | TInformationColor
  | TWarningColor
  | TErrorColor
  | TSuccessColor
  | TPrimaryColor
  | TGreyColor
  | TSecondaryColor
  | TTextColor;

export const styleColor = (colorCode?: TColor) =>
  colorCode ? styles[`color_${colorCode}`] : "";
export const styleBgColor = (colorCode?: TColor) =>
  colorCode ? styles[`backgroundColor_${colorCode}`] : "";
export const styleStrokeColor = (colorCode?: TColor) =>
  colorCode ? styles[`stroke_${colorCode}`] : "";
export const styleFillColor = (colorCode?: TColor) =>
  colorCode ? styles[`fill_${colorCode}`] : "";
