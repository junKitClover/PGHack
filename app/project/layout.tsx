"use client";

import SideBar from "./sideBar";
import { useState } from "react";
import { Grid, Flex, PageLayout } from "component/organisms";
import { Box, Visible, Text } from "component/atoms";
import { ShowMainMenu } from "state/headerState";
import { useAtom } from "jotai";
import Select from 'react-select';
import TitleAndFilter from "./component/TitleAndFilter/TitleAndFilter";
import styles from './layout.module.scss';

const options = [
  { value: 'kl', label: 'Kuala Lumpur' },
  { value: 'penang', label: 'Penang' },
  { value: 'selangor', label: 'Selangor' },
  { value: 'kuantan', label: 'Kuantan' },
  { value: 'johor', label: 'Johor' }
];

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const [openMenu] = useAtom(ShowMainMenu);
  return (
    <PageLayout paddingTop={10}>
      <Flex gap={6}>
        <Visible visible={[openMenu, true]}>
          <SideBar />
        </Visible>
        <div className={styles.mainContainer}>
          <TitleAndFilter />
          {children}
        </div>
      </Flex>
    </PageLayout>
  );
}
