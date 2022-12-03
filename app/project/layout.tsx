"use client";

import SideBar from "./sideBar";
import { useState } from "react";
import { Grid, Flex, PageLayout } from "component/organisms";
import { Box, Visible } from "component/atoms";
import { ShowMainMenu } from "state/headerState";
import { useAtom } from "jotai";

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
        {children}
      </Flex>
    </PageLayout>
  );
}
