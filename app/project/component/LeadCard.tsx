import { Box, Text, Icon, ColorPlate } from "component/atoms";
import { Stack, Flex } from "component/organisms";
import { Button } from "component/molecules";
import { TColor, TTextColor } from "styles/Color";

type TLeadScore = "high" | "medium" | "low";

interface ColorProps {
  background: TColor;
  color: TTextColor;
}

const ColorMapping: Record<TLeadScore, ColorProps> = {
  high: {
    background: "successDarker",
    color: "white",
  },
  medium: {
    background: "success",
    color: "white",
  },
  low: {
    background: "successLighter",
    color: "black",
  },
};

export interface LeadCardProps {
  name: string;
  phoneNumber: string;
  email: string;
  budegetRange: string;
  location: string;
  searchFor: string;
  lastSearch: string;
  signUpTime: string;
  leadScore: TLeadScore;
  isVerified: boolean;
}

export const LeadQuality = () => (
  <Box border rounded paddingInline={3} paddingBlock={4}>
    <Flex gap={3}>
      <Flex gap={3}>
        <Icon
          iconName="info"
          size="small"
          color="black"
          title="Last Search"
          position="bottom center"
        />
        <Text>Lead Quality</Text>
      </Flex>
      <Flex gap={3}>
        <ColorPlate backgroundColor="successDarker" />
        <Text>Hot</Text>
      </Flex>
      <Flex gap={3}>
        <ColorPlate backgroundColor="success" />
        <Text>Warm</Text>
      </Flex>
      <Flex gap={3}>
        <ColorPlate backgroundColor="successLighter" />
        <Text>Cold</Text>
      </Flex>
    </Flex>
  </Box>
);

const LeadCard = ({
  name,
  phoneNumber,
  email,
  budegetRange,
  location,
  searchFor,
  lastSearch,
  signUpTime,
  leadScore,
  isVerified,
}: LeadCardProps) => (
  <Box border rounded>
    <Flex
      padding={[2, 4]}
      gap={3}
      alignItem="center"
      backgroundColor={ColorMapping[leadScore].background}
    >
      {isVerified && (
        <Icon
          iconName="verified"
          title="OTP Verified"
          size="small"
          color={ColorMapping[leadScore].color}
          position="top center"
        />
      )}
      <Stack gap={1}>
        <Text size="medium" color={ColorMapping[leadScore].color}>
          {name}
        </Text>
        <Flex>
        <a href={`tel:${phoneNumber}`}><Text size="xSmall" color={ColorMapping[leadScore].color}>
          {phoneNumber}
        </Text></a>
        <Text size="xSmall" weight="bold" color={ColorMapping[leadScore].color}>&nbsp;&nbsp;.&nbsp;&nbsp;</Text>
        <a href={`mailto:${email}`}><Text size="xSmall" color={ColorMapping[leadScore].color}>
          {email}
        </Text></a>
        </Flex>
      </Stack>
    </Flex>
    <Flex
      gap={2}
      justifyContent="spaceBetween"
      padding={3}
      backgroundColor="greyLighter"
    >
      <Flex gap={2}>
        <Icon
          iconName="update"
          size="small"
          color="black"
          title="Last Search"
          position="bottom center"
        />
        <Text as="span" color="black" size="small" weight="thin">
          {lastSearch}
        </Text>
      </Flex>
      <Flex gap={2}>
        <Icon
          iconName="file_upload"
          size="small"
          color="black"
          title="Submit Date"
          position="bottom center"
        />
        <Text as="span" color="black" size="small" weight="thin">
          {signUpTime}
        </Text>
      </Flex>
    </Flex>
    <Box padding={[2, 4, 6]} backgroundColor="white">
      <Stack gap={4}>
        <Flex gap={2}>
          <Icon iconName="paid" size="small" color="black" title="Budget" />
          <Text as="span" color="black" size="small" weight="thin">
            {budegetRange}
          </Text>
        </Flex>
        <Flex gap={2}>
          <Icon
            iconName="location_on"
            size="small"
            color="black"
            title="Prefere Location"
          />
          <Text as="span" color="black" size="small" weight="thin">
            {location}
          </Text>
        </Flex>
        <Flex gap={2}>
          <Icon iconName="home" size="small" color="black" title="Ownership" />
          <Text as="span" color="black" size="small" weight="thin">
            {searchFor}
          </Text>
        </Flex>
      </Stack>
      <Flex gap={4} justifyContent="spaceBetween" paddingTop={5}>
        <Button type="outline">Show More</Button>
        <Flex gap={2}>
          <Button iconName="chat" size="small" isFloat type="outline" />
        </Flex>
      </Flex>
    </Box>
  </Box>
);

export default LeadCard;
