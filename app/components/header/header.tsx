"use client";

import Image from "next/image";
import { ReactElement, useEffect, useState } from "react";
import { Flex, Grid } from "component/organisms";
import { Text, Visible } from "component/atoms";
import { Button } from "component/molecules";
import { SHOW_MENU } from "state/headerState";
import NavBar from '../navbar/navbar';
import { useAtom } from "jotai";
import styles from "./header.module.scss";

const MobileHeader = () => {
  const [showMainMenu, setShowMainMenu] = useAtom(SHOW_MENU);

  return (
    <Grid
      col={3}
      gap={3}
      paddingBlock={2}
      paddingInline={2}
      className={styles.header}
    >
      <Button
        iconName={showMainMenu ? "close" : "menu"}
        type="outline"
        onClick={() => {
          setShowMainMenu((prev: boolean) => !prev);
        }}
      />
      <a href="https://www.propertyguruforbusiness.com/">
        <Image alt="headerLogo" width={180} height={60} src="/pg4b.svg" />
      </a>
      <span/>
    </Grid>
  );
}

const DesktopHeader = () => {
  const [userName, setUserName] = useState("");

  useEffect(() => {
    const localStorageUserName = localStorage.getItem("userName");
    setUserName(localStorageUserName || "");
  }, [userName]);

  const logout = () => {
    localStorage.removeItem("userName");
    setUserName("");
    window.location.href = "/";
  };

  return (
    <Flex
      alignItem="center"
      justifyContent="spaceBetween"
      gap={3}
      className={styles.header}
    >
      <a href="/">
        <Image alt="headerLogo" width={150} height={60} src="/pg4b.svg" />
      </a>
      <NavBar/>
    </Flex>
  );
}

const Header = (): ReactElement => (
  <>
    <Visible visible={[true, false]} isAutoWidth={false}>
      <MobileHeader/>
    </Visible>
    <Visible visible={[false, true]} isAutoWidth={false}>
      <DesktopHeader/>
    </Visible>
  </>
);

export default Header;
