import { ReactNode, HTMLAttributes } from 'react';
import { generateSpaceListBaseOnCommonInterface, PaddingSemanticProps, MarginSemanticProps, GapProps } from 'styles/Space';
import classnames from 'classnames';
import styles from './Grid.module.scss';
import { TGeneralDevice } from 'types/device.d';

type TCol = 1|2|3|4|5|6|7|8;
type T2Col = '1by2' | '1by3' | '1by4' | '1by5' | '1by6' |
'2by1' | '2by3' | '2by4' | '2by5' | '2by6' |
'3by1' | '3by2' | '3by4' | '3by5' | '3by6' |
'4by1' | '4by2' | '4by3' | '4by5' | '4by6' |
'5by1' | '5by2' | '5by3' | '5by4' | '5by6' |
'6by1' | '6by2' | '6by3' | '6by4' | '6by5' ;

export type TColumn = TCol |T2Col;

export interface StackProps extends HTMLAttributes<HTMLDivElement>, PaddingSemanticProps, MarginSemanticProps, GapProps {
  children: ReactNode | ReactNode[];
  col?: TGeneralDevice<TColumn>;
  border?: boolean;
}

const generateColumnStyleList = (value?: TGeneralDevice<TColumn>): Array<string> => {
  if (value) {
    if (Array.isArray(value)) {
      const [mobile, tablet, laptop] = value;
      return [
        styles[`grid_col_mobile_col${mobile}`],
        styles[`grid_col_tablet_col${tablet || mobile}`],
        styles[`grid_col_laptop_col${laptop || tablet || mobile}`]
      ];
    }

    return [styles[`grid_col_col${value}`]];
  }
  return [];
};

export const Grid = ({
  children,
  padding,
  paddingBlock,
  paddingInline,
  margin,
  marginBlock,
  marginInline,
  gap,
  border,
  col=1,
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
        styles.gridBase,
        listStyles,
        generateColumnStyleList(col),
        {
          [styles.gridBorder]: border,
        }
      )}
    >
      {children}
    </div>
  );
};
