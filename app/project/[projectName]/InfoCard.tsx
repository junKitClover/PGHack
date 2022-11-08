import { Box, Text } from "component/atoms";
import { Stack, Grid, Flex } from "component/organisms";
import { LeadCard } from "component/molecules";

export interface InfoCardProps {
  title: string;
  contain: string;
}

const InfoCard = ({ title, contain }: InfoCardProps) => (
  <Box border rounded paddingBlock={3} paddingInline={4}>
    <Flex gap={3} direction="column" alignItem="center">
      <Text size="medium">{title}</Text>
      <Text size="xLarge" weight="bold">
        {contain}
      </Text>
    </Flex>
  </Box>
);

export default InfoCard;
