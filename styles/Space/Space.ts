import styles from './Space.module.scss';
import { TGeneralDevice } from 'types/device.d';

export type TSize = 1 | 2 | 3 | 4 | 5 | 6 | 8 | 10 | 12 | 15 | 20 | 40 | 80;

export type TPaddingType =
  | 'padding'
  | 'paddingInline'
  | 'paddingBlock'
  | 'paddingTop'
  | 'paddingBottom'
  | 'paddingLeft'
  | 'paddingRight';
export type TMarginType =
  | 'margin'
  | 'marginInline'
  | 'marginBlock'
  | 'marginTop'
  | 'marginBottom'
  | 'marginLeft'
  | 'marginRight';
export type TOthers = 'width' | 'height';
export type TGapType = 'gap';

type TAllType = TPaddingType | TMarginType | TGapType | TOthers;

export type TSizes = TGeneralDevice<TSize>;

export interface BasicProps {
  width?: TSizes;
  height?: TSizes;
}

export interface GapProps{
  gap?: TSizes;
}

export interface PaddingBasicProps {
  padding?: TSizes;
  paddingTop?: TSizes;
  paddingBottom?: TSizes;
  paddingLeft?: TSizes;
  paddingRight?: TSizes;
}

export interface PaddingSemanticProps {
  padding?: TSizes;
  paddingInline?: TSizes;
  paddingBlock?: TSizes;
}

export interface PaddingProps extends PaddingBasicProps, PaddingSemanticProps{}

export interface MarginBasicProps {
  margin?: TSizes;
  marginTop?: TSizes;
  marginBottom?: TSizes;
  marginLeft?: TSizes;
  marginRight?: TSizes;
}

export interface MarginSemanticProps {
  margin?: TSizes;
  marginInline?: TSizes;
  marginBlock?: TSizes;
}

export interface MarginProps extends MarginBasicProps, MarginSemanticProps{}

export interface AllProps extends MarginProps, PaddingProps, BasicProps, GapProps{}

interface GenerateSpaceStyleListProps {
  size?: TSizes;
  type: TAllType;
}

export const generateSpaceListBaseOnCommonInterface = (spaceProps: AllProps): Array<string> =>
  Object.keys(spaceProps)
    .map((spaceKey) => generateSpaceList({ size: spaceProps[spaceKey as TAllType], type: (spaceKey as TAllType) }))
    .flat();

export const generateSpaceList = ({ size, type }: GenerateSpaceStyleListProps): Array<string> => {
  if (size) {
    if (Array.isArray(size)) {
      const [mobile, tablet, laptop] = size;
      return [
        styles[`space_${type}_mobile_${mobile}`],
        styles[`space_${type}_tablet_${tablet || mobile}`],
        styles[`space_${type}_laptop_${laptop || tablet || mobile}`]
      ];
    }

    return [styles[`space_${type}_${size}`]];
  }

  return [];
};
