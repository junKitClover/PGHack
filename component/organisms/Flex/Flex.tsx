import { ReactNode, HTMLAttributes } from 'react';
import { generateSpaceListBaseOnCommonInterface, PaddingSemanticProps, MarginSemanticProps, GapProps, PaddingProps, MarginProps } from 'styles/Space';
import { TGeneralDevice } from 'types/device.d';
import classnames from 'classnames';
import styles from './Flex.module.scss';
import { TColor, styleBgColor } from 'styles/Color';

export type TGap = TGeneralDevice<1 | 2 | 3 | 4 | 5 | 6 | 8 | 10>;
export type TDirection = TGeneralDevice<'row' | 'column' | 'rowReverse' | 'columnReverse'>;
export type TJustifyContent = TGeneralDevice<
  'center' | 'flexEnd' | 'flexStart' | 'spaceAround' | 'spaceBetween' | 'spaceEvenly'
>;
export type TAlignItem = TGeneralDevice<'center' | 'flexEnd' | 'flexStart' | 'stretch' | 'start' | 'end'>;
export type TWrapper = 'wrap' | 'wrapReverse' | 'noWrap';

export interface FlexProps extends HTMLAttributes<HTMLDivElement>, PaddingProps, MarginProps, GapProps {
  children: ReactNode | ReactNode[];
  direction?: TDirection;
  justifyContent?: TJustifyContent;
  alignItem?: TAlignItem;
  wrap?: TWrapper;
  border?: boolean;
  backgroundColor?: TColor;
}

const generateDirectionStyleList = (value?: TDirection): Array<string> => {
  if (value) {
    if (Array.isArray(value)) {
      const [mobile, tablet, laptop] = value;
      return [
        styles[`flex_direction_mobile_${mobile}`],
        styles[`flex_direction_tablet_${tablet || mobile}`],
        styles[`flex_direction_laptop_${laptop || tablet || mobile}`]
      ];
    }

    return [styles[`flex_direction_${value}`]];
  }
  return [];
};

const generateJustifyContentStyleList = (value?: TJustifyContent): Array<string> => {
  if (value) {
    if (Array.isArray(value)) {
      const [mobile, tablet, laptop] = value;
      return [
        styles[`flex_justifyContent_mobile_${mobile}`],
        styles[`flex_justifyContent_tablet_${tablet || mobile}`],
        styles[`flex_justifyContent_laptop_${laptop || tablet || mobile}`]
      ];
    }

    return [styles[`flex_justifyContent_${value}`]];
  }
  return [];
};

const generateAlignItemsStyleList = (value?: TAlignItem): Array<string> => {
  if (value) {
    if (Array.isArray(value)) {
      const [mobile, tablet, laptop] = value;
      return [
        styles[`flex_alignItems_mobile_${mobile}`],
        styles[`flex_alignItems_tablet_${tablet || mobile}`],
        styles[`flex_alignItems_laptop_${laptop || tablet || mobile}`]
      ];
    }

    return [styles[`flex_alignItems_${value}`]];
  }
  return [];
};

export const Flex = ({
  children,
  padding,
  paddingBlock,
  paddingInline,
  paddingTop,
  paddingBottom,
  paddingLeft,
  paddingRight,
  margin,
  marginBlock,
  marginInline,
  marginBottom,
  marginLeft,
  marginRight,
  marginTop,
  gap,
  direction,
  justifyContent,
  alignItem,
  wrap,
  border,
  className,
  backgroundColor,
  ...restProps
}: FlexProps) => {
  const listStyles: Array<string> = generateSpaceListBaseOnCommonInterface({
    padding,
    paddingBlock,
    paddingInline,
    paddingTop,
    paddingBottom,
    paddingLeft,
    paddingRight,
    margin,
    marginBlock,
    marginInline,
    marginBottom,
    marginLeft,
    marginRight,
    marginTop,
    gap
  });

  return (
    <div
      {...restProps}
      className={classnames(
        className,
        styles.flexBase,
        listStyles,
        styleBgColor(backgroundColor),
        generateDirectionStyleList(direction),
        generateJustifyContentStyleList(justifyContent),
        generateAlignItemsStyleList(alignItem),
        (wrap ? styles[`flex_${wrap}`] : '' ),
        {
          [styles.flexBorder]: border,
        }
      )}
    >
      {children}
    </div>
  );
};
