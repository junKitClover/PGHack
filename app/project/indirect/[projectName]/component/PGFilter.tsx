
import { Box, Text, Icon } from "component/atoms";
import { Grid } from "component/organisms";
import styles from './PGFilter.module.scss';

const PGFilter = () => (
  <Grid paddingBlock={3} paddingInline={2} gap={3}>
    <Text as="label">PG Default filter will be base on: </Text>
    <ul>
      <li className={styles.listStyle}>
        <Icon iconName="done" size="small" color="success" />
        <Text>Location</Text>
      </li>
      <li className={styles.listStyle}>
        <Icon iconName="done" size="small" color="success" />
        <Text>Property type</Text>
      </li>
      <li className={styles.listStyle}>
        <Icon iconName="done" size="small" color="success" />
        <Text>Purpose</Text>
      </li>
      <li className={styles.listStyle}>
        <Icon iconName="done" size="small" color="success" />
        <Text>Budget Range</Text>
      </li>
      <li className={styles.listStyle}>
        <Icon iconName="done" size="small" color="success" />
        <Text>Submission Date</Text>
      </li>
    </ul>
  </Grid>
);

export default PGFilter;
