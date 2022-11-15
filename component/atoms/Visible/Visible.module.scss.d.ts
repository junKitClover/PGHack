export type Styles = {
  'autoWidth': string;
  'display_hidden': string;
  'display_laptop_hidden': string;
  'display_laptop_show': string;
  'display_mobile_hidden': string;
  'display_mobile_show': string;
  'display_print_hidden': string;
  'display_print_show': string;
  'display_show': string;
  'display_tablet_hidden': string;
  'display_tablet_show': string;
  'fullWidth': string;
};

export type ClassNames = keyof Styles;

declare const styles: Styles;

export default styles;
