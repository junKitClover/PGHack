export type Styles = {
  'box': string;
  'lines': string;
  'placeholderShimmer': string;
  'shine': string;
};

export type ClassNames = keyof Styles;

declare const styles: Styles;

export default styles;
