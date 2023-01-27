"use client";

import { Text } from "component/atoms";
import { Flex, Stack } from "component/organisms";
import { LEAD_SEARCH_LOADING, LEAD_SEARCH_RESULT, LEAD_USER_NAME, LEAD_PAGE } from "state/leadStated";
import { useAtom } from "jotai";
import TitleAndSearch from "./component/TitleAndSearch/TitleAndSearch";
import LeadCard from "../../components/LeadCard/LeadCard";
import styles from "./page.module.scss";


const Page = () => {
  return (
    <Stack gap={4}>
      <TitleAndSearch />
    </Stack>
  )
};

export default Page;