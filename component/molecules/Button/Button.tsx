import 'material-icons/iconfont/material-icons.css';
import styles from './Button.module.scss';
import { IconProps } from '../../atoms/Icon/Icon.d';
import { getIconStyle } from '../../atoms/Icon/IconHelper';
import classnames from 'classnames';
import { HTMLAttributes } from 'react';

export type TButtonSizes = 'large' | 'medium' | 'small';
export type TButtonTypes = 'contained' | 'outline' | 'text';

export interface ButtonProps extends HTMLAttributes<HTMLButtonElement>, Partial<IconProps> {
  type?: TButtonTypes;
  size?: TButtonSizes;
  children?: string;
  simulateHover?: boolean;
  simulatePress?: boolean;
  disabled?: boolean;
  isFloat?: boolean;
  position?: 'left' | 'right';
}

export const Button = ({
  type = 'contained',
  size = 'medium',
  children = '',
  simulateHover = false,
  simulatePress = false,
  disabled = false,
  isFloat = false,
  iconName,
  iconFilled = false,
  iconGrade = 0,
  iconOpticalSize = 20,
  iconType = 'outlined',
  iconWeight = 600,
  position = 'left',
  ...restProps
}: ButtonProps) => {
  const typeMap: Record<TButtonTypes, object> = {
    contained: {
      [styles.contained_simulate_hover]: simulateHover,
      [styles.contained_simulate_press]: simulatePress,
      [styles.contained_button]: !simulateHover && !simulatePress,
      [styles.contained]: true,
      [styles[`contained_${size}`]]: true
    },
    outline: {
      [styles.outline_simulate_hover]: simulateHover,
      [styles.outline_simulate_press]: simulatePress,
      [styles.outline_button]: !simulateHover && !simulatePress,
      [styles.outline]: true,
      [styles[`outline_${size}`]]: true
    },
    text: {
      [styles.text_simulate_hover]: simulateHover,
      [styles.text_simulate_press]: simulatePress,
      [styles.text_button]: !simulateHover && !simulatePress,
      [styles.text]: true,
      [styles[`text_${size}`]]: true
    }
  };
  if (!children && !iconName) return null;

  

  return (
    <button
      {...restProps}
      className={classnames(isFloat ? styles.float : styles.notFloat,   styles[`buttonIcon_${position}`],{
        [styles.buttonIcon]: iconName,
        [styles[`buttonPadding_iconOnly_${size}`]]: iconName && !children,
        [styles[`buttonPadding_words_${size}`]]: children,
        ...typeMap[type],
      })}
      disabled={disabled}
    >
      {iconName && (
        <span
          className={classnames(`material-icons-${iconType}`, styles[`buttonIconFontSize_${size}`])}
          style={{
            fontVariationSettings: getIconStyle({ iconFilled, iconGrade, iconOpticalSize, iconType, iconWeight })
          }}
        >
          {iconName}
        </span>
      )}
      {children}
    </button>
  );
};
