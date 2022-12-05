export type Styles = {
  'borderBottomRound': string;
  'borderTopRound': string;
  'cardBase': string;
  'container': string;
  'leadScore': string;
  'leadScore_cold': string;
  'leadScore_hot': string;
  'leadScore_warm': string;
  'line': string;
  'link': string;
  'minWidth': string;
  'showLessIcon': string;
  'showMoreIcon': string;
};

export type ClassNames = keyof Styles;

declare const styles: Styles;

export default styles;
