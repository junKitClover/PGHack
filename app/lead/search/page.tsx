"use client";

import { Text } from "component/atoms";
import { Stack } from "component/organisms";
import { LEAD_SEARCH_RESULT, LEAD_SEARCH_LOADING } from "state/leadStated";
import { useAtom } from "jotai";
import TitleAndSearch from "./component/TitleAndSearch/TitleAndSearch";
import { Result } from "./LeadType";
import LeadCard from "./component/LeadCard/LeadCard";

const Page = () => {
  const [leadSearchResult] = useAtom(LEAD_SEARCH_RESULT);
  const [isLoading] = useAtom(LEAD_SEARCH_LOADING);

  const leadList = leadSearchResult as unknown as Result;

  return (
    <Stack gap={4}>
      <TitleAndSearch />
      {isLoading && <Text>Loading ...</Text>}
      {!isLoading && leadSearchResult.length > 0 ? leadSearchResult.map((lead, i) => (<LeadCard key={i} {...lead} />)) : <Text>no result found</Text>}
    </Stack>
  )
};

export default Page;