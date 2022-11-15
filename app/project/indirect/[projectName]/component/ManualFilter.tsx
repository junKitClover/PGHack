import LocationDropDown from "./LocationDropDown";
import BudgetDropDown from "./BudgetDropDown";
import DeveloperDropDown from "./DeveloperDropDown";
import PurposeDropDown from "./PurposeDropDown";
import { Grid, Flex } from "component/organisms";
import { Text } from "component/atoms";

const ManualFilter = () => (
  <Grid gap={3} col={2} paddingBlock={4} paddingInline={3}>
    <Text as="label">Manual Filter </Text><Text as="label"> </Text>
    <Text as="label" weight="semiBold">Location</Text>
    <LocationDropDown/>
    <Text as="label" weight="semiBold">Budget</Text>
    <BudgetDropDown/>
    <Text as="label" weight="semiBold">Others Developer Lead</Text>
    <DeveloperDropDown/>
    <Text as="label" weight="semiBold">Purpose</Text>
    <PurposeDropDown/>
  </Grid>
);

export default ManualFilter;