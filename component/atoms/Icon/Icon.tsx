import { IconProps } from "./Icon.d";
import { getIconStyle } from "./IconHelper";
import classnames from "classnames";
import { TGeneralDevice } from 'types/device.d';
import styles from './Icon.module.scss';

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
  size: TGeneralDevice<IconSizeType>;
}

const Icon = ({
  iconType,
  iconFilled,
  iconGrade,
  iconOpticalSize,
  iconWeight,
  size,
  iconName
}: IconComponentProps) => (
  <span
    className={classnames(
      `material-icons-${iconType}`,
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
);
