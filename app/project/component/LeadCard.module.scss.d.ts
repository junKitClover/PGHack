export type Styles = {
  'container': string;
  'leadScore': string;
};

export type ClassNames = keyof Styles;

declare const styles: Styles;

export default styles;
