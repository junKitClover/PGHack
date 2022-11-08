import { ReactNode, HTMLAttributes } from 'react';
import { TColor, styleBgColor } from 'styles/Color';
import classnames from 'classnames';
import styles from './PageLayout.module.scss';

export interface IPageLayoutProps extends HTMLAttributes<HTMLDivElement> {
  children: ReactNode;
  backgroundColor?: TColor;
}

export const PageLayout = ({ children, backgroundColor, ...restProps }: IPageLayoutProps) =>
  <div {...restProps} className={classnames(styles.pageLayout, styleBgColor(backgroundColor))}>
    <div className={styles.pageLayout_item}>
      {children}
    </div>
  </div>;
