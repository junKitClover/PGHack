import { Flex, Grid, Stack } from "component/organisms";
import { Box,Text } from "component/atoms";
import { Button } from "component/molecules";

const SideBar = () => (
  <Box backgroundColor="greyLighter" paddingBlock={3} paddingInline={2}>
    <Stack gap={3}>
      <Button type="text" isFloat>project 1</Button>
      <Button type="text" isFloat>project 2</Button>
      <Button type="text" isFloat>project 3</Button>
      <Button type="text" isFloat>project 4</Button>
      <Button type="text" isFloat>project 5</Button>
    </Stack>
  </Box>
);

const LeadCard = () => (
  <Box border rounded>
    <Box padding={[2,4,6]} backgroundColor="errorDarker"><Text type="title" color="white">Name</Text></Box>
    <Box padding={[2,4,6]} backgroundColor="white">
      <Stack gap={2}>
        <Flex direction={["column","row"]} gap={2}>
          <Text as="span" color="black" size="medium" weight="semiBold">Name</Text>
          <Text as="span" color="black" size="medium" weight="thin">Name</Text>
        </Flex>
        <Flex direction={["column","row"]} gap={2}>
          <Text as="span" color="black" size="medium" weight="semiBold">Name</Text>
          <Text as="span" color="black" size="medium" weight="thin">Name</Text>
        </Flex>
        <Flex direction={["column","row"]} gap={2}>
          <Text as="span" color="black" size="medium" weight="semiBold">Name</Text>
          <Text as="span" color="black" size="medium" weight="thin">Name</Text>
        </Flex>
        <Flex direction={["column","row"]} gap={2}>
          <Text as="span" color="black" size="medium" weight="semiBold">Name</Text>
          <Text as="span" color="black" size="medium" weight="thin">Name</Text>
        </Flex>
      </Stack>
      <Flex gap={4} paddingBlock={3} justifyContent="spaceBetween">
        <Button type="outline">Show More</Button>
        <Flex gap={2}>
          <Button iconName="call" size="small" isFloat type="outline" />
          <Button iconName="sms" size="small" isFloat type="outline" />
        </Flex>
      </Flex>
    </Box>
  </Box>
)

const Page = () => (<Grid col={[1,"1by6"]} gap={3}>
  <SideBar/>
  <Grid col={[1,3,4]} gap={[3,5,6]} paddingBlock={5} paddingInline={3}><LeadCard/></Grid></Grid>);

export default Page;