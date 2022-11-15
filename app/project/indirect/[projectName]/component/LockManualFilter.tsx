import { Box, Text, Icon } from "component/atoms";
import { Grid, Flex } from "component/organisms";

const BudgetDropDown = () => (
  <Grid paddingBlock={3} paddingInline={2} gap={3}>
    <Text as="label">Manual Config</Text>
    <Flex
      justifyContent="center"
      alignItem="center"
      direction="column"
      gap={3}
      paddingBlock={2}
    >
      <Icon iconName="lock" size="large" color="information" />
      <Text as="label">Please contact your Account Manager to unlock</Text>
    </Flex>
  </Grid>
);

export default BudgetDropDown;
