export type Styles = {
  'container': string;
  'leadScore': string;
  'leadScore_cold': string;
  'leadScore_hot': string;
  'leadScore_warm': string;
  'minWidth': string;
  'showLess': string;
  'showMore': string;
};

export type ClassNames = keyof Styles;

declare const styles: Styles;

export default styles;
