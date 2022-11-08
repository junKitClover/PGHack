import { Box, Text } from "component/atoms";
import { Stack, Flex } from "component/organisms";
import { Button } from "component/molecules";
import { TColor } from "styles/Color";
import styles from "./LeadCard.modules.scss";

type TLeadScore = "high" | "medium" | "low" | "inactive";

const ColorMapping: Record<TLeadScore, TColor> = {
  high: "errorDarker",
  medium: "error",
  low: "errorLighter",
  inactive: "greyDarker",
};

export interface LeadCardProps {
  name: string;
  budegetRange: string;
  location: string;
  searchFor: string;
  lastSearch: string;
  leadScore: TLeadScore;
}

export const LeadQuality = () => (
  <Box border rounded paddingInline={3} paddingBlock={4}>
    <Flex gap={3}>
      <Flex gap={3}>
        <Box backgroundColor="errorDarker" style={{ width: "32px" }}>
          {" "}
        </Box>
        <Text>High</Text>
      </Flex>
      <Flex gap={3}>
        <Box backgroundColor="error" style={{ width: "32px" }}>
          {" "}
        </Box>
        <Text>Medium</Text>
      </Flex>
      <Flex gap={3}>
        <Box backgroundColor="errorLighter" style={{ width: "32px" }}>
          {" "}
        </Box>
        <Text>Low</Text>
      </Flex>
      <Flex gap={3}>
        <Box backgroundColor="greyDarker" style={{ width: "32px" }}>
          {" "}
        </Box>
        <Text>Inactive</Text>
      </Flex>
    </Flex>
  </Box>
);

const LeadCard = ({
  name,
  budegetRange,
  location,
  searchFor,
  lastSearch,
  leadScore,
}: LeadCardProps) => (
  <Box border rounded>
    <Box padding={[2, 4, 6]} backgroundColor={ColorMapping[leadScore]}>
      <Text type="title" color="white">
        {name}
      </Text>
    </Box>
    <Box padding={[2, 4, 6]} backgroundColor="white">
      <Stack gap={2}>
        <Flex direction={["column", "row"]} gap={2}>
          <Text as="span" color="black" size="medium" weight="semiBold">
            Budget
          </Text>
          <Text as="span" color="black" size="medium" weight="thin">
            {budegetRange}
          </Text>
        </Flex>
        <Flex direction={["column", "row"]} gap={2}>
          <Text as="span" color="black" size="medium" weight="semiBold">
            Search Location
          </Text>
          <Text as="span" color="black" size="medium" weight="thin">
            {location}
          </Text>
        </Flex>
        <Flex direction={["column", "row"]} gap={2}>
          <Text as="span" color="black" size="medium" weight="semiBold">
            Searching for
          </Text>
          <Text as="span" color="black" size="medium" weight="thin">
            {searchFor}
          </Text>
        </Flex>
        <Flex direction={["column", "row"]} gap={2}>
          <Text as="span" color="black" size="medium" weight="semiBold">
            Last Seach
          </Text>
          <Text as="span" color="black" size="medium" weight="thin">
            {lastSearch}
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
