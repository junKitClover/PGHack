export type Styles = {
  'filterBox': string;
  'secondBox': string;
  'selecter': string;
};

export type ClassNames = keyof Styles;

declare const styles: Styles;

export default styles;
