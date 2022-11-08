export type Styles = {
  'buttonIcon': string;
  'buttonIcon_left': string;
  'buttonIcon_right': string;
  'buttonIconFontSize_large': string;
  'buttonIconFontSize_medium': string;
  'buttonIconFontSize_small': string;
  'buttonPadding_iconOnly_large': string;
  'buttonPadding_iconOnly_medium': string;
  'buttonPadding_iconOnly_small': string;
  'buttonPadding_words_large': string;
  'buttonPadding_words_medium': string;
  'buttonPadding_words_small': string;
  'contained': string;
  'contained_button': string;
  'contained_large': string;
  'contained_medium': string;
  'contained_simulate_hover': string;
  'contained_simulate_press': string;
  'contained_small': string;
  'float': string;
  'notFloat': string;
  'outline': string;
  'outline_button': string;
  'outline_large': string;
  'outline_medium': string;
  'outline_simulate_hover': string;
  'outline_simulate_press': string;
  'outline_small': string;
  'text': string;
  'text_button': string;
  'text_large': string;
  'text_medium': string;
  'text_simulate_hover': string;
  'text_simulate_press': string;
  'text_small': string;
};

export type ClassNames = keyof Styles;

declare const styles: Styles;

export default styles;
