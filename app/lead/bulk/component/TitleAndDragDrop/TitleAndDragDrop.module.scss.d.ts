export type Styles = {
  'customFileUpload': string;
  'download': string;
  'fileInput': string;
  'fullSize': string;
  'selecter': string;
  'table': string;
  'tableCell': string;
};

export type ClassNames = keyof Styles;

declare const styles: Styles;

export default styles;
