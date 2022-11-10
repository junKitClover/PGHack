import styles from './Visible.module.scss';
import { ReactNode, HTMLAttributes } from 'react';
import { TGeneralDevice } from 'types/device.d';
import classnames from 'classnames';

export interface IVisibleProps extends HTMLAttributes<HTMLDivElement> {
  visible: TGeneralDevice<boolean>;
  visibleInPrint?: boolean;
  children: ReactNode | ReactNode[];
  isAutoWidth?: boolean;
}

const getVisibleTerms = (visible: boolean): 'show' | 'hidden' => (visible ? 'show' : 'hidden');

const generateVisibleStyleList = (value?: TGeneralDevice<boolean>): Array<string> => {
  if (Array.isArray(value)) {
    const [mobile, tablet, laptop] = value;

    return [
      styles[`display_mobile_${getVisibleTerms(mobile)}`],
      styles[`display_tablet_${getVisibleTerms(tablet ?? mobile)}`],
      styles[`display_laptop_${getVisibleTerms(laptop ?? tablet ?? mobile)}`]
    ];
  }

  return value === false ? [styles['display_hidden']] : [styles['display_show']] ;
};

export const Visible = ({ visible, children, visibleInPrint = true, isAutoWidth = true, ...restprops }: IVisibleProps) => (
  <div
    {...restprops}
    className={classnames(
      isAutoWidth ? styles.autoWidth : styles.fullWidth,
      ...generateVisibleStyleList(visible),
      styles[`display_print_${getVisibleTerms(visibleInPrint)}`]
    )}
  >
    {children}
  </div>
);
