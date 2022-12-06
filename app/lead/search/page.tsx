"use client";

import { Text } from "component/atoms";
import { Flex, Stack } from "component/organisms";
import { LEAD_SEARCH_LOADING, LEAD_SEARCH_RESULT, LEAD_USER_NAME, LEAD_PAGE } from "state/leadStated";
import { useAtom } from "jotai";
import TitleAndSearch from "./component/TitleAndSearch/TitleAndSearch";
import LeadCard from "../../components/LeadCard/LeadCard";
import styles from "./page.module.scss";

const Status = () => {
  const [isLoading] = useAtom(LEAD_SEARCH_LOADING);
  const [leadSearchResult] = useAtom(LEAD_SEARCH_RESULT);
  const [name] = useAtom(LEAD_USER_NAME);

  const [, setLeadPage] = useAtom(LEAD_PAGE);
  setLeadPage('Search Lead');

  if(isLoading){
    return (
      <Flex justifyContent="center" alignItem="center" className={styles.fullSize}>
        <Text>Loading ...</Text>
      </Flex>
    );
  }
  if(leadSearchResult.length > 0){
    return (<>{leadSearchResult.map((lead, i) => (<LeadCard key={i} {...lead} name={name} shouldShowAllAtFirst/>))}</>);
  }
  return (
    <Flex justifyContent="center" alignItem="center" className={styles.fullSize}>
    <Text>No result found</Text>
  </Flex>
  )
}

const Page = () => {
  return (
    <Stack gap={4}>
      <TitleAndSearch />
      <Status />
    </Stack>
  )
};

export default Page;