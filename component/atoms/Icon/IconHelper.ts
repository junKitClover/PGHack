import { IconProps } from './Icon.d';

export const getIconStyle = ({
  iconFilled = false,
  iconGrade = 0,
  iconOpticalSize = 20,
  iconWeight = 300
}: Omit<IconProps, 'iconName'>): string =>
  `"FILL" ${iconFilled ? 1 : 0}, "wght" ${iconWeight}, "GRAD" ${iconGrade}, "opsz" ${iconOpticalSize}`;
