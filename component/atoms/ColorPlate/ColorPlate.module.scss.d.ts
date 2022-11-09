export type Styles = {
  'boxBorder': string;
  'colorPlate': string;
  'rounded': string;
};

export type ClassNames = keyof Styles;

declare const styles: Styles;

export default styles;
