export type Styles = {
  'pageLayout': string;
  'pageLayout_item': string;
};

export type ClassNames = keyof Styles;

declare const styles: Styles;

export default styles;
