export type Styles = {
  'container': string;
  'emptyResult': string;
};

export type ClassNames = keyof Styles;

declare const styles: Styles;

export default styles;
