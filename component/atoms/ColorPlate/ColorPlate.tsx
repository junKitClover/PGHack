import { ReactNode, HTMLAttributes } from 'react';
import styles from './ColorPlate.module.scss';
import { generateSpaceListBaseOnCommonInterface, PaddingSemanticProps, MarginSemanticProps } from 'styles/Space';
import { TColor, styleBgColor, styleColor } from 'styles/Color';
import classnames from 'classnames';

export interface ColorPlateProps extends HTMLAttributes<HTMLDivElement>, PaddingSemanticProps, MarginSemanticProps {
  backgroundColor: TColor;
  border?: boolean;
  rounded?: boolean;
}

export const ColorPlate = ({
  backgroundColor,
  border = false,
  rounded = false,
  ...restProps
}: ColorPlateProps) => {
  return (
    <div
      className={classnames(styleBgColor(backgroundColor), styles.colorPlate,{
        [styles.boxBorder]: border,
        [styles.rounded]: rounded,
      })}
      {...restProps}
    />
  );
};
