import { ReactNode, HTMLAttributes } from 'react';
import { generateSpaceListBaseOnCommonInterface, PaddingSemanticProps, MarginSemanticProps, GapProps } from 'styles/Space';
import classnames from 'classnames';
import styles from './Stack.module.scss';


export interface StackProps extends HTMLAttributes<HTMLDivElement>, PaddingSemanticProps, MarginSemanticProps, GapProps {
  children: ReactNode | ReactNode[];
  border?: boolean;
}

export const Stack = ({
  children,
  padding,
  paddingBlock,
  paddingInline,
  margin,
  marginBlock,
  marginInline,
  gap,
  border,
  ...restProps
}: StackProps) => {
  const listStyles: Array<string> = generateSpaceListBaseOnCommonInterface({
    padding,
    paddingBlock,
    paddingInline,
    margin,
    marginBlock,
    marginInline,
    gap
  });

  return (
    <div
      {...restProps}
      className={classnames(
        styles.stackBase,
        listStyles,
        {
          [styles.stackBorder]: border,
        }
      )}
    >
      {children}
    </div>
  );
};
