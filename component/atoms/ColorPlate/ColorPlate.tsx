import { ReactNode, HTMLAttributes } from 'react';
import styles from './ColorPlate.module.scss';
import { generateSpaceListBaseOnCommonInterface, PaddingSemanticProps, MarginSemanticProps } from 'styles/Space';
import { TColor, styleBgColor, styleColor } from 'styles/Color';
import classnames from 'classnames';
import { Icon } from '../Icon';

export interface ColorPlateProps extends HTMLAttributes<HTMLDivElement>, PaddingSemanticProps, MarginSemanticProps {
  backgroundColor: TColor;
  border?: boolean;
  rounded?: boolean;
  isSelected?: boolean;
}

export const ColorPlate = ({
  backgroundColor,
  border = false,
  rounded = false,
  isSelected = false,
  ...restProps
}: ColorPlateProps) => {
  return (
    <div
      className={classnames(styleBgColor(backgroundColor), styles.colorPlate,{
        [styles.boxBorder]: border,
        [styles.rounded]: rounded,
      })}
      
      {...restProps}
    >{isSelected && <Icon iconName="check" size="small" color="white"/>}</div>
  );
};
