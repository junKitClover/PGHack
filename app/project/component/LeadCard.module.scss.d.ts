export type Styles = {
  'container': string;
  'leadScore': string;
  'minWidth': string;
  'showLess': string;
  'showMore': string;
};

export type ClassNames = keyof Styles;

declare const styles: Styles;

export default styles;
