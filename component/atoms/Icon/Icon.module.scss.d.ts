export type Styles = {
  'icon_size_laptop_large': string;
  'icon_size_laptop_medium': string;
  'icon_size_laptop_small': string;
  'icon_size_laptop_xLarge': string;
  'icon_size_laptop_xSmall': string;
  'icon_size_large': string;
  'icon_size_medium': string;
  'icon_size_mobile_large': string;
  'icon_size_mobile_medium': string;
  'icon_size_mobile_small': string;
  'icon_size_mobile_xLarge': string;
  'icon_size_mobile_xSmall': string;
  'icon_size_small': string;
  'icon_size_tablet_large': string;
  'icon_size_tablet_medium': string;
  'icon_size_tablet_small': string;
  'icon_size_tablet_xLarge': string;
  'icon_size_tablet_xSmall': string;
  'icon_size_xLarge': string;
  'icon_size_xSmall': string;
  'iconImage': string;
};

export type ClassNames = keyof Styles;

declare const styles: Styles;

export default styles;
