export type Styles = {
  'text': string;
  'text_specify_display': string;
  'text_specify_paragraph': string;
  'text_specify_subtitle': string;
  'text_specify_title': string;
  'text_specify_tooltips': string;
};

export type ClassNames = keyof Styles;

declare const styles: Styles;

export default styles;
