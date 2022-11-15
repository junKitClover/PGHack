"use client";

import SideBar from "./sideBar";
import { useState } from "react";
import { Grid, Flex } from "component/organisms";
import { Box, Visible } from "component/atoms";
import { Button } from "component/molecules";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const [openMenu, setOpenMenu] = useState(false);
  return (
    <Grid col={[1, "1by6"]} gap={3}>
      <Visible visible={[true, false]}>
        <Flex paddingTop={3} paddingLeft={3}>
          <Button
            iconName="menu"
            type="outline"
            onClick={() => {
              setOpenMenu((prev) => !prev);
            }}
          />
        </Flex>
      </Visible>
      <Visible visible={[openMenu, true]}>
        <SideBar />
      </Visible>
      <Visible visible={[!openMenu, true]}>{children}</Visible>
    </Grid>
  );
}
