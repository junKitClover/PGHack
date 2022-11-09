import { Box, Text } from "component/atoms";
import { Stack, Grid, Flex } from "component/organisms";
import LeadCard, { LeadCardProps, LeadQuality } from "./LeadCard";
import InfoCard, { InfoCardProps } from "./InfoCard";
import { Button } from "component/molecules";

interface ProjectNameProps {
  params: {
    projectName: string;
  };
  searchParams: object;
}

interface ProjectInfor {
  name: string;
  detailList: Array<InfoCardProps>;
}

const projectInfo: Record<string, ProjectInfor> = {
  "the-light-waterfront-penang": {
    detailList: [
      { title: "Search Metrics", contain: "0.89" },
      { title: "Target Budget", contain: "RM 300k - 600k" },
      { title: "Type", contain: "Condo" },
      { title: "Location", contain: "Gelugor, Penang" },
      { title: "Numbers of Leads", contain: "24" },
      { title: "Target Company", contain: "Sunway, Setia City" },
    ],
    name: "The Light Waterfront Penang",
  },
  "permatang-sanctuary": {
    detailList: [
      { title: "Search Metrics", contain: "0.10" },
      { title: "Target Budget", contain: "RM 500k - 800k" },
      { title: "Type", contain: "Condo" },
      { title: "Location", contain: "Gelugor, Penang" },
      { title: "Numbers of Leads", contain: "15" },
      { title: "Target Company", contain: "Sunway, Setia City" },
    ],
    name: "Permatang Sanctuary",
  },
  trehaus: {
    detailList: [
      { title: "Search Metrics", contain: "0.15" },
      { title: "Target Budget", contain: "RM 800k - 1500k" },
      { title: "Type", contain: "Condo" },
      { title: "Location", contain: "Gelugor, Penang" },
      { title: "Numbers of Leads", contain: "23" },
      { title: "Target Company", contain: "Sunway, Setia City" },
    ],
    name: "Trehaus",
  },
  "the-terraces-condominium": {
    detailList: [
      { title: "Search Metrics", contain: "0.50" },
      { title: "Target Budget", contain: "RM 300k - 600k" },
      { title: "Type", contain: "Condo" },
      { title: "Location", contain: "Gelugor, Penang" },
      { title: "Numbers of Leads", contain: "32" },
      { title: "Target Company", contain: "Sunway, Setia City" },
    ],
    name: "The Terraces Condominium",
  },
  "udini-square": {
    detailList: [
      { title: "Search Metrics", contain: "0.01" },
      { title: "Target Budget", contain: "RM 500k - 800k" },
      { title: "Type", contain: "Outlet" },
      { title: "Location", contain: "Gelugor, Penang" },
      { title: "Numbers of Leads", contain: "0" },
    ],
    name: "UDINI Square",
  },
  "vertiq-boutique-outlets": {
    detailList: [
      { title: "Search Metrics", contain: "0.01" },
      { title: "Target Budget", contain: "RM 700k - 2000k" },
      { title: "Type", contain: "Outlet" },
      { title: "Location", contain: "Gelugor, Penang" },
      { title: "Numbers of Leads", contain: "0" },
      { title: "Target Company", contain: "Sunway, Setia City" },
    ],
    name: "Vertiq Boutique Outlets",
  },
};

const leadInfo: Array<LeadCardProps> = [
  {
    name: "Mike Wong",
    budegetRange: "RM 500k - 620k",
    location: "Penang",
    searchFor: "Self stay",
    lastSearch: "3 days ago",
    signUpTime: "11 days ago",
    leadScore: "high",
    isVerified: true,
  },
  {
    name: "Dickson Chong",
    budegetRange: "RM 330k - 520k",
    location: "Penang",
    searchFor: "Self stay",
    lastSearch: "1 days ago",
    signUpTime: "3 days ago",
    leadScore: "high",
    isVerified: true,
  },
  {
    name: "Karen Mo",
    budegetRange: "RM 330k - 520k",
    location: "Penang",
    searchFor: "Self stay",
    lastSearch: "Just Now",
    signUpTime: "Just Now",
    leadScore: "high",
    isVerified: false,
  },
  {
    name: "Anna Hee",
    budegetRange: "RM 430k - 500k",
    location: "Penang",
    searchFor: "Self stay",
    lastSearch: "Just Now",
    signUpTime: "A Month ago",
    leadScore: "high",
    isVerified: true,
  },
  {
    name: "Tan Ah Kao",
    budegetRange: "RM 330k - 520k",
    location: "Malaysia",
    searchFor: "Investment",
    lastSearch: "14 days ago",
    signUpTime: "A Month ago",
    leadScore: "medium",
    isVerified: true,
  },
  {
    name: "Hana Teow",
    budegetRange: "RM 330k - 520k",
    location: "Malaysia",
    searchFor: "Self stay",
    lastSearch: "23 days ago",
    signUpTime: "2 Months ago",
    leadScore: "medium",
    isVerified: false,
  },
  {
    name: "Julie Lew",
    budegetRange: "RM 600k - 720k",
    location: "Kuala Lumpur",
    searchFor: "Investment",
    lastSearch: "A Month ago",
    signUpTime: "3 Months ago",
    leadScore: "low",
    isVerified: false,
  },
  {
    name: "Michelle Yeong",
    budegetRange: "RM 300k - 350k",
    location: "Malaysia",
    searchFor: "Investment",
    lastSearch: "2 Months ago",
    signUpTime: "3 Months ago",
    leadScore: "low",
    isVerified: false,
  },
];

const Page = ({ params: { projectName } }: ProjectNameProps) => {
  const { name, detailList } = projectInfo[projectName];
  return (
    <Stack gap={4}>
      <Text type="display" as="h1" padding={4}>
        {name}
      </Text>
      <Flex gap={2}>
        <Button type="outline">Direct Lead</Button>
        <Button type="contained">Indirect Lead</Button>
      </Flex>
      <Grid col={[2, , 3]} gap={[3, 5, 6]} paddingBlock={5} paddingInline={3}>
        {detailList.map((props, i) => (
          <InfoCard {...props} key={i} />
        ))}
      </Grid>
      <LeadQuality />
      <Grid col={[1, 2, 3]} gap={[3, 5, 6]} paddingBlock={5} paddingInline={3}>
        {leadInfo.map((prop, i) => (
          <LeadCard {...prop} key={i} />
        ))}
      </Grid>
    </Stack>
  );
};

export default Page;
