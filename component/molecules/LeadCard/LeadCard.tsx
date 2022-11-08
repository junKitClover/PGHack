import { Box, Text } from 'component/atoms';
import { Stack, Flex } from 'component/organisms';
import { Button } from 'component/molecules';

const LeadCard = () => (
  <Box border rounded>
    <Box padding={[2, 4, 6]} backgroundColor="errorDarker">
      <Text type="title" color="white">
        Name
      </Text>
    </Box>
    <Box padding={[2, 4, 6]} backgroundColor="white">
      <Stack gap={2}>
        <Flex direction={["column", "row"]} gap={2}>
          <Text as="span" color="black" size="medium" weight="semiBold">
            Name
          </Text>
          <Text as="span" color="black" size="medium" weight="thin">
            Name
          </Text>
        </Flex>
        <Flex direction={["column", "row"]} gap={2}>
          <Text as="span" color="black" size="medium" weight="semiBold">
            Name
          </Text>
          <Text as="span" color="black" size="medium" weight="thin">
            Name
          </Text>
        </Flex>
        <Flex direction={["column", "row"]} gap={2}>
          <Text as="span" color="black" size="medium" weight="semiBold">
            Name
          </Text>
          <Text as="span" color="black" size="medium" weight="thin">
            Name
          </Text>
        </Flex>
        <Flex direction={["column", "row"]} gap={2}>
          <Text as="span" color="black" size="medium" weight="semiBold">
            Name
          </Text>
          <Text as="span" color="black" size="medium" weight="thin">
            Name
          </Text>
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
);

export default LeadCard;