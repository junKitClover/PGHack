export type Styles = {
  'checked': string;
  'listStyle': string;
  'section': string;
  'sectionDisable': string;
  'selectedSection': string;
};

export type ClassNames = keyof Styles;

declare const styles: Styles;

export default styles;
