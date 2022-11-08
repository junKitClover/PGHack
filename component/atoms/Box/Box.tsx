import { ReactNode, HTMLAttributes } from 'react';
import styles from './Box.module.scss';
import { generateSpaceListBaseOnCommonInterface, PaddingSemanticProps, MarginSemanticProps } from 'styles/Space';
import { TColor, styleBgColor, styleColor } from 'styles/Color';
import classnames from 'classnames';

export interface SpaceProps extends HTMLAttributes<HTMLDivElement>, PaddingSemanticProps, MarginSemanticProps {
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
  marginInline,
  ...restProps
}: SpaceProps) => {
  const listStyles: Array<string> = generateSpaceListBaseOnCommonInterface({
    padding,
    paddingBlock,
    paddingInline,
    margin,
    marginBlock,
    marginInline
  });

  return (
    <div
      className={classnames(listStyles, styleBgColor(backgroundColor), styleColor(color), {
        [styles.boxBorder]: border,
        [styles.rounded]: rounded,
      })}
      {...restProps}
    >
      {children}
    </div>
  );
};
