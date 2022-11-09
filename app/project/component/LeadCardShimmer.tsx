import styles from "./LeadCardShimmer.module.scss";
import classnames from "classnames";
import { Stack } from "component/organisms";
import { HTMLAttributes } from "react";

const LeadCardShimmer = ({ ...restProps }: HTMLAttributes<HTMLDivElement>) => (
  <div {...restProps}>
    <Stack gap={2}>
      <div className={classnames(styles.lines, styles.shine)} />
      <div className={classnames(styles.shine, styles.box)} />
    </Stack>
  </div>
);

export default LeadCardShimmer;
