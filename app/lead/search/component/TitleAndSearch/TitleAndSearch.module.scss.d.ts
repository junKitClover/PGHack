export type Styles = {
  'filterBox': string;
  'fullSize': string;
  'secondBox': string;
  'selecter': string;
  'textInput': string;
};

export type ClassNames = keyof Styles;

declare const styles: Styles;

export default styles;
