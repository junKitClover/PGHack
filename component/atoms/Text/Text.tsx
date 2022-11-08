import { HTMLAttributes, ReactNode } from 'react';
import { generateFontSizeList, generateFontWeightList, TFontSizes, TFontWeights } from 'styles/Font';
import { generateSpaceListBaseOnCommonInterface, PaddingProps } from 'styles/Space';
import { TTextColor, styleColor } from 'styles/Color';
import classnames from 'classnames';
import styles from './Text.module.scss';

export type TAs = 'span' | 'div' | 'p' | 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';
export type TSizeType = 'display' | 'paragraph' | 'subtitle' | 'title' | 'tooltips';

export interface TextBaseProps extends HTMLAttributes<HTMLElement>, PaddingProps {
  as?: TAs;
  size?: TFontSizes;
  type?: TSizeType;
  weight?: TFontWeights;
  color?: TTextColor;
  children: ReactNode;
}

export const Text = ({
  size = 'medium',
  type,
  as = 'p',
  weight = 'normal',
  className,
  children,
  padding,
  paddingBlock,
  paddingBottom,
  paddingInline,
  paddingLeft,
  paddingRight,
  paddingTop,
  color = 'greyDarker',
  ...restProps
}: TextBaseProps) => {
  const CustomTag = as;
  const listSpaceStyles: Array<string> = generateSpaceListBaseOnCommonInterface({
    padding,
    paddingBlock,
    paddingBottom,
    paddingInline,
    paddingLeft,
    paddingRight,
    paddingTop
  });

  const fontSizeWeight = type
    ? [styles[`text_specify_${type}`]]
    : [...generateFontSizeList(size), ...generateFontWeightList(weight)];

  return (
    <CustomTag className={classnames(styles.text, className, ...fontSizeWeight, ...listSpaceStyles, styleColor(color))} {...restProps}>
      {children}
    </CustomTag>
  );
};
