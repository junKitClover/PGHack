export type Styles = {
  'customFileUpload': string;
  'download': string;
  'fileInput': string;
  'fullSize': string;
  'table': string;
  'tableCell': string;
};

export type ClassNames = keyof Styles;

declare const styles: Styles;

export default styles;
