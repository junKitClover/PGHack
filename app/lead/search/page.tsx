"use client";

import { Text } from "component/atoms";
import { Flex, Stack } from "component/organisms";
import { LEAD_SEARCH_LOADING, LEAD_SEARCH_RESULT } from "state/leadStated";
import { useAtom } from "jotai";
import TitleAndSearch from "./component/TitleAndSearch/TitleAndSearch";
import LeadCard from "./component/LeadCard/LeadCard";
import styles from "./page.module.scss";

const Status = () => {
  const [isLoading] = useAtom(LEAD_SEARCH_LOADING);
  const [leadSearchResult] = useAtom(LEAD_SEARCH_RESULT);

  if(isLoading){
    return (
      <Flex justifyContent="center" alignItem="center" className={styles.fullSize}>
        <Text>Loading ...</Text>
      </Flex>
    );
  }
  if(leadSearchResult.length > 0){
    return (<>{leadSearchResult.map((lead, i) => (<LeadCard key={i} {...lead} />))}</>);
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