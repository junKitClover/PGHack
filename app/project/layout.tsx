"use client";

import SideBar from "./sideBar";
import { Grid, Flex, PageLayout } from "component/organisms";
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
  return (
    <PageLayout paddingTop={10}>
      <Flex gap={6} direction={["column",, "row"]}>
        <SideBar />
        <div className={styles.mainContainer}>
          <TitleAndFilter />
          {children}
        </div>
      </Flex>
    </PageLayout>
  );
}
