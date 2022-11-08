import { Box, Text } from "component/atoms";
import { Stack, Grid, Flex } from "component/organisms";
import { LeadCard } from "component/molecules";
import InfoCard, { InfoCardProps } from "./InfoCard";

interface ProjectNameProps {
  params: {
    projectName: string;
  };
  searchParams: object;
}

const projectInfo: Array<InfoCardProps> = [
  { title: "Search Popularity", contain: "89%" },
  { title: "Target Budget", contain: "300k - 600k" },
  { title: "Location", contain: "Gelugor, Penang" },
  { title: "Numbers of Leads", contain: "300" },
];

const Page = ({ params: { projectName } }: ProjectNameProps) => {
  return (
    <Stack gap={4}>
      <Text type="display" as="h1">
        {projectName}
      </Text>
      <Grid col={[1, 2, 3]} gap={[3, 5, 6]} paddingBlock={5} paddingInline={3}>
        {projectInfo.map((props, i) => <InfoCard {...props} key={i}/>)}
      </Grid>
      <Grid col={[1, 2, 3]} gap={[3, 5, 6]} paddingBlock={5} paddingInline={3}>
        <LeadCard />
        <LeadCard />
        <LeadCard />
        <LeadCard />
        <LeadCard />
        <LeadCard />
        <LeadCard />
        <LeadCard />
      </Grid>
    </Stack>
  );
};

export default Page;
