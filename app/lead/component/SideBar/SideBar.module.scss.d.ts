export type Styles = {
  'borderOnTop': string;
  'highlightBar': string;
  'link': string;
  'projectSideBar': string;
};

export type ClassNames = keyof Styles;

declare const styles: Styles;

export default styles;
