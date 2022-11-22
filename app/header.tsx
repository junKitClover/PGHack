'use client'

import Image from "next/image";
import { ReactElement, useEffect, useState } from "react";
import { Flex } from "component/organisms";
import { Text } from "component/atoms";
import { Button } from "component/molecules";
import styles from "./header.module.scss";

const Header = (): ReactElement => {
  const [userName, setUserName] = useState('');

  useEffect(()=>{
    const localStorageUserName = localStorage.getItem('userName');
    setUserName(localStorageUserName || '');
  },[ userName ]);

  const logout = () => {
    localStorage.removeItem('userName');
    setUserName('');
    window.location.href = "/";
  }

  return (
    <Flex
      alignItem="center"
      justifyContent="spaceBetween"
      gap={3}
      paddingBlock={[2, 3]}
      paddingInline={[2, 4, 6]}
      className={styles.header}
    >
      <Image alt="headerLogo" width={120} height={60} src="/propertyguru.svg" />
      {userName ? <Button onClick={logout} type="text" isFloat>Logout</Button> : null}
    </Flex>
  );
};

export default Header;
