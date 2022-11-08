import styles from './Font.module.scss';
import { TGeneralDevice } from 'types/device.d';

type TFontSize = 'xSmall' |
'small' |
'medium' |
'large' |
'xLarge' |
'xxLarge';

type TFontWeight = 'thin' |
'normal' |
'semiBold' |
'bold';

export type TFontSizes = TGeneralDevice<TFontSize>;
export type TFontWeights = TGeneralDevice<TFontWeight>;

export const generateFontSizeList = (size?: TFontSizes): Array<string> => {
  if (size) {
    if (Array.isArray(size)) {
      const [mobile, tablet, laptop] = size;
      return [
        styles[`text_size_mobile_${mobile}`],
        styles[`text_size_tablet_${tablet || mobile}`],
        styles[`text_size_laptop_${laptop || tablet || mobile}`]
      ];
    }

    return [styles[`text_size_${size}`]];
  }

  return [];
};

export const generateFontWeightList = (weight?: TFontWeights): Array<string> => {
  if (weight) {
    if (Array.isArray(weight)) {
      const [mobile, tablet, laptop] = weight;
      return [
        styles[`text_weight_mobile_${mobile}`],
        styles[`text_weight_tablet_${tablet || mobile}`],
        styles[`text_weight_laptop_${laptop || tablet || mobile}`]
      ];
    }

    return [styles[`text_weight_${weight}`]];
  }

  return [];
};

