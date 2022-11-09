import { Box, Text } from "component/atoms";
import { Stack, Grid, Flex } from "component/organisms";

export interface InfoCardProps {
  title: string;
  contain: string;
}

const InfoCard = ({ title, contain }: InfoCardProps) => (
  <Box border rounded paddingBlock={3} paddingInline={4}>
    <Flex gap={3} direction="column" alignItem="center">
      <Text size={['xSmall','small','medium']} weight={['thin', ,'normal']}>{title}</Text>
      <Text size={['medium', ,'large']} weight={['semiBold', ,'bold']}>
        {contain}
      </Text>
    </Flex>
  </Box>
);

export default InfoCard;
