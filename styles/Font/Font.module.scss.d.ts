export type Styles = {
  'text_size_laptop_large': string;
  'text_size_laptop_medium': string;
  'text_size_laptop_small': string;
  'text_size_laptop_xLarge': string;
  'text_size_laptop_xSmall': string;
  'text_size_laptop_xxLarge': string;
  'text_size_large': string;
  'text_size_medium': string;
  'text_size_mobile_large': string;
  'text_size_mobile_medium': string;
  'text_size_mobile_small': string;
  'text_size_mobile_xLarge': string;
  'text_size_mobile_xSmall': string;
  'text_size_mobile_xxLarge': string;
  'text_size_small': string;
  'text_size_tablet_large': string;
  'text_size_tablet_medium': string;
  'text_size_tablet_small': string;
  'text_size_tablet_xLarge': string;
  'text_size_tablet_xSmall': string;
  'text_size_tablet_xxLarge': string;
  'text_size_xLarge': string;
  'text_size_xSmall': string;
  'text_size_xxLarge': string;
  'text_weight_bold': string;
  'text_weight_laptop_bold': string;
  'text_weight_laptop_normal': string;
  'text_weight_laptop_semiBold': string;
  'text_weight_laptop_thin': string;
  'text_weight_mobile_bold': string;
  'text_weight_mobile_normal': string;
  'text_weight_mobile_semiBold': string;
  'text_weight_mobile_thin': string;
  'text_weight_normal': string;
  'text_weight_semiBold': string;
  'text_weight_tablet_bold': string;
  'text_weight_tablet_normal': string;
  'text_weight_tablet_semiBold': string;
  'text_weight_tablet_thin': string;
  'text_weight_thin': string;
};

export type ClassNames = keyof Styles;

declare const styles: Styles;

export default styles;
