export type Styles = {
  'body': string;
  'content': string;
  'link': string;
  'mobileWidth': string;
};

export type ClassNames = keyof Styles;

declare const styles: Styles;

export default styles;
