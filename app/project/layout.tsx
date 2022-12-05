"use client";

import SideBar from "./component/SideBar/SideBar";
import { Grid, Flex, PageLayout } from "component/organisms";
import TitleAndFilter from "./component/TitleAndFilter/TitleAndFilter";
import styles from './layout.module.scss';

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
