"use client";

import SideBar from "./sideBar";
import { useState } from "react";
import { Grid, Flex } from "component/organisms";
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
    <Grid col={[1, "1by6"]} gap={3}>
      <Visible visible={[openMenu, true]}>
        <SideBar />
      </Visible>
      <Visible visible={[!openMenu, true]}>{children}</Visible>
    </Grid>
  );
}
