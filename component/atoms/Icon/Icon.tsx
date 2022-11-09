'use client'

import 'material-icons/iconfont/material-icons.css';
import { IconProps } from "./Icon.d";
import { getIconStyle } from "./IconHelper";
import { Text } from '../Text/Text';
import classnames from "classnames";
import { TColor, styleColor } from 'styles/Color';
import { TGeneralDevice } from 'types/device.d';
import styles from './Icon.module.scss';
import Popup from 'reactjs-popup';
import { Box } from '../Box';

type IconSizeType = "xSmall" | "small" | "medium" | "large" | "xLarge";

const generateSizeStyleList = (value?: TGeneralDevice<IconSizeType>): Array<string> => {
  if (Array.isArray(value)) {
    const [mobile, tablet, laptop] = value;

    return [
      styles[`icon_size_mobile_${mobile}`],
      styles[`icon_size_tablet_${tablet ?? mobile}`],
      styles[`icon_size_laptop_${laptop ?? tablet ?? mobile}`]
    ];
  }

  return value ? [styles[`icon_size_${value}`]] : [] ;
};


interface IconComponentProps extends IconProps {
  iconName: string;
  color?: TColor;
  size: TGeneralDevice<IconSizeType>;
  title?:string;
  position?: 'right center' | 'left center' | 'top center' | 'bottom center';
}

const Icon = ({
  iconType = 'outlined',
  color='black',
  iconFilled,
  iconGrade,
  iconOpticalSize,
  iconWeight,
  size,
  iconName,
  title,
  position = 'right center',
}: IconComponentProps) => (
    <Popup
      trigger={
        <span
          title={title}
          className={classnames(
            styles.iconImage,
            `material-icons-${iconType}`,
            styleColor(color),
            ...generateSizeStyleList(size)
          )}
          style={{
            fontVariationSettings: getIconStyle({
              iconFilled,
              iconGrade,
              iconOpticalSize,
              iconType,
              iconWeight,
            }),
          }}
        >
          {iconName}
        </span>
      }
      position={position}
      on={['hover', 'focus']}
      arrow={true}
    >
      {
        title ? <Box backgroundColor="white" rounded padding={2} border>
          <Text>{title}</Text>
        </Box> : null
      }
      
    </Popup>
    
);
export default Icon;
