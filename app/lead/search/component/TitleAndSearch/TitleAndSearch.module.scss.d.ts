export type Styles = {
  'filterBox': string;
  'secondBox': string;
  'textInput': string;
};

export type ClassNames = keyof Styles;

declare const styles: Styles;

export default styles;
