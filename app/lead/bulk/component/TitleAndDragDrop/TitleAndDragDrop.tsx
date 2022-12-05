"use client";

import { Box, Text } from "component/atoms";
import styles from './TitleAndSearch.module.scss';
import { Flex, Stack } from "component/organisms";
import { Button } from "component/molecules";
import { LEAD_SEARCH_RESULT, LEAD_SEARCH_LOADING, LEAD_USER_NAME } from "state/leadStated";
import { useAtom } from "jotai";
import classNames from "classnames";
import { MouseEvent } from "react";
import { prettyDataSet } from '../../../helper/prettyDataSet';
import { Result } from '../../../LeadType';

const selectFile = (event: MouseEvent<HTMLButtonElement, MouseEvent>) => {
  
}

export default function TitleAndFilter() {
  return (
    <Box paddingBlock={4} paddingInline={[4, , 6]} border rounded marginTop={[4, 12]}>
      <Stack gap={4}>
        <Text type="title">Search Lead</Text>
        <Box border rounded paddingBlock={8} paddingInline={4}>
          <Flex justifyContent="center" alignItem="center" direction="column">
            <Text>Please upload a csv files, contain name, phoneNumber and email on the header</Text>
            <input type="file">Select Files</input>
          </Flex>
        </Box>
      </Stack>
    </Box>
  );
}
