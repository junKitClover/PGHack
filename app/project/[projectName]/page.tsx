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
    lastSearch: "10/11/2022 . 3:30pm",
    leadScore: "high",
  },
  {
    name: "Dickson Chong",
    budegetRange: "RM 330k - 520k",
    location: "Penang",
    searchFor: "Self stay",
    lastSearch: "10/11/2022 . 3:30pm",
    leadScore: "high",
  },
  {
    name: "Karen Mo",
    budegetRange: "RM 330k - 520k",
    location: "Penang",
    searchFor: "Self stay",
    lastSearch: "10/11/2022 . 3:30pm",
    leadScore: "high",
  },
  {
    name: "Anna Hee",
    budegetRange: "RM 430k - 500k",
    location: "Penang",
    searchFor: "Self stay",
    lastSearch: "1/11/2022 . 3:30pm",
    leadScore: "high",
  },
  {
    name: "Tan Ah Kao",
    budegetRange: "RM 330k - 520k",
    location: "Malaysia",
    searchFor: "investment",
    lastSearch: "1/11/2022 . 3:30pm",
    leadScore: "medium",
  },
  {
    name: "Hana Teow",
    budegetRange: "RM 330k - 520k",
    location: "Malaysia",
    searchFor: "Self stay",
    lastSearch: "1/11/2022 . 3:30pm",
    leadScore: "medium",
  },
  {
    name: "Julie Lew",
    budegetRange: "RM 600k - 720k",
    location: "Kuala Lumpur",
    searchFor: "investment",
    lastSearch: "1/11/2022 . 3:30pm",
    leadScore: "low",
  },
  {
    name: "Michelle Yeong",
    budegetRange: "RM 300k - 350k",
    location: "Malaysia",
    searchFor: "investment",
    lastSearch: "1/11/2022 . 3:30pm",
    leadScore: "low",
  },
];

const Page = ({ params: { projectName } }: ProjectNameProps) => {
  const {name, detailList} = projectInfo[projectName];
  return (
    <Stack gap={4}>
      <Text type="display" as="h1" padding={4}>
        {name}
      </Text>
      <Grid col={[1, 2, 3]} gap={[3, 5, 6]} paddingBlock={5} paddingInline={3}>
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
