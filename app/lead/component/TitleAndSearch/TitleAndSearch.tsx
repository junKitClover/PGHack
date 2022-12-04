"use client";

import { Box, Text } from "component/atoms";
import Select, { StylesConfig } from 'react-select';
import styles from './TitleAndFilter.module.scss';
import chroma from 'chroma-js';
import { Flex, Stack } from "component/organisms";
import { Button } from "component/molecules";
import { PROJECT_NAME } from "state/projectState";
import { useAtom } from "jotai";
import classNames from "classnames";


export default function TitleAndFilter() {
  const [name] = useAtom(PROJECT_NAME);
  return (
    <Box paddingBlock={4} paddingInline={[4, , 6]} border rounded marginTop={[4, 12]}>
      <Stack gap={4}>
        <Text type="title">Search Lead</Text>
        <Box border rounded paddingBlock={3} paddingInline={4}>
          <Stack gap={2}>
            <Text type="tooltips">Filter by</Text>
            <Flex gap={4} direction={['column', , 'row']}>
              <Box className={classNames(styles.filterBox)}>
                <input type="text" placeholder="Name" className={styles.textInput}/>
              </Box>
              <Box className={classNames(styles.filterBox, styles.secondBox)}>
                <input type="text" placeholder="Email" className={styles.textInput}/>
              </Box>
              <Box className={classNames(styles.filterBox, styles.secondBox)}>
                <input type="text" placeholder="Phone Number" className={styles.textInput}/>
              </Box>
            </Flex>
          </Stack>
        </Box>
      </Stack>
    </Box>
  );
}
