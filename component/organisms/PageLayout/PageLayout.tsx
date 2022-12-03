import { ReactNode, HTMLAttributes } from 'react';
import { TColor, styleBgColor } from 'styles/Color';
import { generateSpaceListBaseOnCommonInterface, PaddingProps } from 'styles/Space';
import classnames from 'classnames';
import styles from './PageLayout.module.scss';

export interface IPageLayoutProps extends HTMLAttributes<HTMLDivElement>, PaddingProps {
  children: ReactNode;
  backgroundColor?: TColor;
}

export const PageLayout = ({ children, backgroundColor, padding, paddingBlock, paddingBottom, paddingInline, paddingLeft, paddingRight, paddingTop, ...restProps }: IPageLayoutProps) => {
  const listStyles: Array<string> = generateSpaceListBaseOnCommonInterface({
    padding,
    paddingBlock,
    paddingInline,
    paddingTop,
    paddingBottom,
    paddingLeft,
    paddingRight,
  });

  return (
    <div {...restProps} className={classnames(styles.pageLayout, listStyles, styleBgColor(backgroundColor))}>
      <div className={styles.pageLayout_item}>
        {children}
      </div>
    </div>);
}
