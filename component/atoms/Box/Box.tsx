import { ReactNode, HTMLAttributes } from 'react';
import styles from './Box.module.scss';
import { generateSpaceListBaseOnCommonInterface, PaddingSemanticProps, MarginProps } from 'styles/Space';
import { TColor, styleBgColor, styleColor } from 'styles/Color';
import classnames from 'classnames';

export interface SpaceProps extends HTMLAttributes<HTMLDivElement>, PaddingSemanticProps, MarginProps {
  backgroundColor?: TColor;
  color?: TColor;
  children: ReactNode;
  border?: boolean;
  rounded?: boolean;
}

export const Box = ({
  backgroundColor = 'white',
  color = 'greyDarker',
  border = false,
  rounded = false,
  children,
  padding,
  paddingBlock,
  paddingInline,
  margin,
  marginBlock,
  marginBottom,
  marginLeft,
  marginRight,
  marginTop,
  marginInline,
  className,
  ...restProps
}: SpaceProps) => {
  const listStyles: Array<string> = generateSpaceListBaseOnCommonInterface({
    padding,
    paddingBlock,
    paddingInline,
    margin,
    marginBlock,
    marginInline,
    marginBottom,
    marginLeft,
    marginRight,
    marginTop,
  });

  return (
    <div
      className={classnames(className, listStyles, styleBgColor(backgroundColor), styleColor(color), {
        [styles.boxBorder]: border,
        [styles.rounded]: rounded,
      })}
      {...restProps}
    >
      {children}
    </div>
  );
};
