import { Box, Text } from "component/atoms";
import { Stack, Grid, Flex } from "component/organisms";
import LeadCard, { LeadCardProps, LeadQuality } from "./LeadCard";
import InfoCard, { InfoCardProps } from "./InfoCard";

interface ProjectNameProps {
  params: {
    projectName: string;
  };
  searchParams: object;
}

const projectInfo: Array<InfoCardProps> = [
  { title: "Search Popularity", contain: "89%" },
  { title: "Target Budget", contain: "RM 300k - 600k" },
  { title: "Type", contain: "Condo" },
  { title: "Location", contain: "Gelugor, Penang" },
  { title: "Numbers of Leads", contain: "300" },
];

const leadInfo: Array<LeadCardProps> = [
  {name: 'Mike Wong', budegetRange: 'RM 500k - 620k', location: 'Penang', searchFor: 'Self stay', lastSearch: '10/11/2022 . 3:30pm', leadScore: 'high'},
  {name: 'Dickson Chong', budegetRange: 'RM 330k - 520k', location: 'Penang', searchFor: 'Self stay', lastSearch: '10/11/2022 . 3:30pm', leadScore: 'high'},
  {name: 'Karen Mo', budegetRange: 'RM 330k - 520k', location: 'Penang', searchFor: 'Self stay', lastSearch: '10/11/2022 . 3:30pm', leadScore: 'high'},
  {name: 'Anna Hee', budegetRange: 'RM 430k - 500k', location: 'Penang', searchFor: 'Self stay', lastSearch: '1/11/2022 . 3:30pm', leadScore: 'high'},
  {name: 'Tan Ah Kao', budegetRange: 'RM 330k - 520k', location: 'Malaysia', searchFor: 'investment', lastSearch: '1/11/2022 . 3:30pm', leadScore: 'medium'},
  {name: 'Hana Teow', budegetRange: 'RM 330k - 520k', location: 'Malaysia', searchFor: 'Self stay', lastSearch: '1/11/2022 . 3:30pm', leadScore: 'medium'},
  {name: 'Julie Lew', budegetRange: 'RM 600k - 720k', location: 'Kuala Lumpur', searchFor: 'investment', lastSearch: '1/11/2022 . 3:30pm', leadScore: 'low'},
  {name: 'Michelle Yeong', budegetRange: 'RM 300k - 350k', location: 'Malaysia', searchFor: 'investment', lastSearch: '1/11/2022 . 3:30pm', leadScore: 'low'},
  {name: 'Green Tea', budegetRange: 'RM 330k - 520k', location: 'Malaysia', searchFor: 'investment', lastSearch: '1/11/2022 . 3:30pm', leadScore: 'inactive'},
  {name: 'Andrew Chen', budegetRange: 'RM 200k - 320k', location: 'Malaysia', searchFor: 'investment', lastSearch: '1/11/2022 . 3:30pm', leadScore: 'inactive'},
]

const Page = ({ params: { projectName } }: ProjectNameProps) => {
  return (
    <Stack gap={4}>
      <Text type="display" as="h1">
        {projectName}
      </Text>
      <Grid col={[1, 2, 3]} gap={[3, 5, 6]} paddingBlock={5} paddingInline={3}>
        {projectInfo.map((props, i) => <InfoCard {...props} key={i}/>)}
      </Grid>
      <LeadQuality/>
      <Grid col={[1, 2, 3]} gap={[3, 5, 6]} paddingBlock={5} paddingInline={3}>
        {leadInfo.map((prop, i)=>(<LeadCard {...prop} key={i}/>))}
      </Grid>
    </Stack>
  );
};

export default Page;
