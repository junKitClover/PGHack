import styles from "./LeadCardShimmer.module.scss";
import classnames from "classnames";
import { Stack } from "component/organisms";
import { HTMLAttributes } from "react";
import { Box } from "component/atoms";

const LeadCardShimmer = ({ ...restProps }: HTMLAttributes<HTMLDivElement>) => (
  <div {...restProps}>
    <Box border rounded padding={6}>
      <Stack gap={2}>
        <div className={classnames(styles.lines, styles.shine)} />
        <div className={classnames(styles.shine, styles.box)} />
      </Stack>
    </Box>
  </div>
);

export default LeadCardShimmer;
